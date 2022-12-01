import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ENDPOINTS } from "../../../consts/api";

export default ({ className }) => {
  const { animalID } = useParams();
  const [animal, setAnimal] = useState({});

  useEffect(() => {
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
  }, [animalID])

  return (
    <div className={className}>
      <header className="header">
        <h1>{animal.name}</h1>
        <img src={`/icons/${animal.gender ? 'male' : 'female'}.svg`} />
        <h5>{animal.birthday}</h5>
      </header>
      <section className="info_wrapper">
        {
          animal.description &&
          <section className="description">
            {animal.description}
          </section>
        }
        <section>
          <ul>
            <li>Edad: {animal.age} años</li>
            {animal.breed && <li>Raza: {animal.breed}</li>}
            <li>Se encuentra en {animal.city}, {animal.province}</li>
            <li>En manos de la asociación {animal.association?.name}</li>
          </ul>
          
        </section>
      </section>
    </div>
  )
}