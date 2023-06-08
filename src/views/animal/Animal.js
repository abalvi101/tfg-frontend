import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ENDPOINTS } from "../../../consts/api";
import AnimalAdmin from "./animal-admin/AnimalAdmin.styled";
import AnimalViewer from "./animal-viewer/AnimalViewer.styled";

export default ({ className }) => {
  const { animalID } = useParams();
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    getAnimal();
  }, [animalID])

  const getAnimal = () => {
    axios
      .post(ENDPOINTS.ANIMAL.GET_ANIMAL_INFO, {animal_id: animalID})
      .then(({data}) => {
        if (data.success) {
          setAnimal(data.data);
        } else {
          console.log('Getting animal info:', data.message);
        }
      })
      .catch((error) => console.log('Getting animal info', error))
  }

  return (
    animal.owner
    ? <AnimalAdmin animal={animal} refresh={getAnimal} />
    : <AnimalViewer animal={animal} />
  )
}