import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ENDPOINTS } from "../../consts/api";
import { useAppState, useAuth } from "../../hooks";
import AnimalAdmin from "./animal-admin/AnimalAdmin.styled";
import AnimalViewer from "./animal-viewer/AnimalViewer.styled";

const Animal = () => {
  const { animalID } = useParams();
  const [animal, setAnimal] = useState({});
  const [appState, appStateUpdate] = useAppState();
  const [user, userUpdate] = useAuth();

  useEffect(() => {
    getAnimal();
  }, [animalID, user])

  const getAnimal = async () => {
    appStateUpdate.startLoading();
    await axios
      .post(ENDPOINTS.ANIMAL.GET_ANIMAL_INFO, {animal_id: animalID})
      .then(({data}) => {
        if (data.success) {
          setAnimal(data.data);
        } else {
          console.log('Getting animal info:', data.message);
        }
      })
      .catch((error) => {
        console.log('Getting animal info', error);
        appStateUpdate.newNotification({
          type: 'error',
          message: 'Error, pruebe a actualizar la página.'
        });
      })
      .finally(() => appStateUpdate.finishLoading())
  }

  return (
    animal.owner
    ? <AnimalAdmin animal={animal} refresh={getAnimal} />
    : <AnimalViewer animal={animal} />
  )
}

export default Animal;