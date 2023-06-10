import axios from "axios";
import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ENDPOINTS } from "../../../consts/api";
import { getBase64StringFromImage } from "../../../utils";
import ProfileImage from "../../../components/common/profile-image/ProfileImage.styled"
import AnimalForm from "./animal-form/AnimalForm.styled";
import FosteringForm from "./fostering-form/FosteringForm.styled";
import { useAppState } from "../../../hooks";
import DiseaseForm from "./disease-form/DiseaseForm.styled";

export default ({ className, animal, refresh }) => {
  const [imageBase64, setImageBase64] = useState(null);
  const [image, setImage] = useState(null);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [species, setSpecies] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [appState, appStateUpdate] = useAppState();

  useEffect(() => {
    let getData = async () => {
      appStateUpdate.startLoading();

      await axios.get(ENDPOINTS.LOCATION.GET_PROVINCES)
      .then(({data}) => {
        setProvinces(data.data);
      })
      .catch((error) => {
        console.log('error', error);
      })
  
      await axios.get(ENDPOINTS.LOCATION.GET_CITIES)
      .then(({data}) => {
        setCities(data.data);
      })
      .catch((error) => {
        console.log('error', error);
      })
  
      await axios.get(ENDPOINTS.ANIMAL.GET_SPECIES)
      .then(({data}) => {
        setSpecies(data.data);
      })
      .catch((error) => {
        console.log('error', error);
      })
  
      await axios.get(ENDPOINTS.ANIMAL.GET_BREEDS)
      .then(({data}) => {
        setBreeds(data.data);
      })
      .catch((error) => {
        console.log('error', error);
      })
  
      await axios.get(ENDPOINTS.ANIMAL.GET_SIZES)
      .then(({data}) => {
        setSizes(data.data);
      })
      .catch((error) => {
        console.log('error', error);
      })

      appStateUpdate.finishLoading();
    }

    getData();
  }, [])

  useEffect(() => {
    if (image) {
      getBase64StringFromImage(
        image,
        (value) => setImageBase64(value)
      )
    } else {
      setImageBase64(null);
    }
  }, [image])

  const getImageSrc = () => {
    if (animal.image)
      return animal.image;
    return image ? URL.createObjectURL(image) : null;
  }

  const onLoadImage = (uploadedImage) => {    
    if (uploadedImage) {
      getBase64StringFromImage(
        uploadedImage,
        async (value) => {
          appStateUpdate.startLoading();
          await axios.post(ENDPOINTS.ANIMAL.UPDATE_IMAGE, {animal_id: animal.id, image: value})
          .then(({data}) => {
            if (data.success) {
              setImage(uploadedImage);
            } else {
              console.log('Error al actualizar la imagen.');
            }
          })
          .catch((error) => {
            console.log('Error al actualizar la imagen', error);
          })
          .finally(() => appStateUpdate.finishLoading())
        }
      )
    } else {
      onDeleteImage();
    } 
  }

  const onDeleteImage = () => {
    appStateUpdate.startLoading();
    axios.post(ENDPOINTS.ANIMAL.UPDATE_IMAGE, {animal_id: animal.id, image: ''})
    .then(() => {
      setImage('');
      refresh();
    })
    .catch((error) => {
      console.log('error submit image', error);
    })
    .finally(() => appStateUpdate.finishLoading())
  }

  return (
    <div className={className}>
      <header className="header">
        <ProfileImage
          src={getImageSrc()}
          onEdit={onLoadImage}
          onDelete={onDeleteImage}
          editable
        />
        <h1>{animal.name}</h1>
      </header>

      <AnimalForm
        animal={animal}
        onSuccess={refresh}
        provinces={provinces}
        cities={cities}
        species={species}
        breeds={breeds}
        sizes={sizes}
      />

      <FosteringForm
        animal={animal}
        onSuccess={refresh}
        provinces={provinces}
        cities={cities}
      />
      
      <DiseaseForm
        animal={animal}
        onSuccess={refresh}
      />
    </div>
  )
}