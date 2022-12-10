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
    // <div className={className}>

      // <header className="header">
      //   <span className='name'>
      //     <h1>{animal.name}</h1>
      //     <img src={`/icons/${animal.gender ? 'male' : 'female'}.svg`} />
      //   </span>
      //   <h5 className="association">{animal.association?.name}</h5>
      // </header>
      // <section className="info_wrapper">
      //   {
      //     animal.description &&
      //     <section className="description">
      //       {animal.description}
      //     </section>
      //   }
      //   <section>
      //     <ul>
      //       <li>Edad: {animal.age} años</li>
      //       {animal.breed && <li>Raza: {animal.breed}</li>}
      //       <li>Se encuentra en {animal.city}, {animal.province}</li>
      //       <li>En manos de la asociación {animal.association?.name}</li>
      //       {
      //         animal.diseases?.length &&
      //         <section className="diseases">
      //           <p>{animal.name} tiene las siguientes enfermedades:</p>
      //           <ul>
      //             {animal.diseases.map(
      //               (disease) => (
      //                 <li className="disease">
      //                   <h5>{disease.name} ({disease.chronic ? 'crónico' : 'temporal'})</h5>
      //                   <p>{disease.description}</p>
      //                   <p>{disease.treatment}</p>
      //                 </li>
      //               )
      //             )}
      //           </ul>
      //         </section>  
      //       }
      //     </ul>
      //   </section>
      // </section>
    // </div>
  )
}