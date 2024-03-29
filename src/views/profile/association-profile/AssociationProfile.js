import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { ENDPOINTS } from "../../../consts/api";
import AnimalCard from "../../../components/common/animal-card"
import Button from "../../../components/common/button";
import AnimalForm from "./animal-form/AnimalForm.styled";
import { useAppState } from "../../../hooks";

export default ({ className, association, refresh, themeLight }) => {
  const [appState, appStateUpdate] = useAppState();
  const navigate = useNavigate();
  const [aboutUs, setAboutUs] = useState('');

  useEffect(() => {
    setAboutUs(association.about_us);
  }, [association.about_us])

  const updateAboutUs = () => {
    axios.post(ENDPOINTS.AUTH.UPDATE, {about_us: aboutUs})
    .then(({data}) => {
      if (data.success)
        refresh();
    })
    .catch((error) => {
      console.log('Error al actualizar', error);
      appStateUpdate.newNotification({
        type: 'error',
        message: 'Error, pruebe a actualizar la página.'
      })
    })
  }

  return (
    <div className={className}>
      <section className="about_us">
        <h4>Sobre nosotros/as</h4>
        <textarea
          rows={7}
          value={aboutUs}
          onChange={(event) => setAboutUs(event.target.value)}
        />
        <Button
          primary
          className='button'
          onClick={updateAboutUs}
        >
          Actualizar
        </Button>
        <p>
          Esta asociación se encuentra en {association.city}, {association.province}.
        </p>
      </section>


      <AnimalForm onSuccess={refresh}/>
      
      {
        association.animals?.length
        ? <section className="animals">
            <h4>Animales en adopción</h4>
            <div className="animals_list">
              {
                association.animals?.map(
                  (animal) => (
                    <AnimalCard
                      animal={animal}
                      key={animal.id}
                      onClick={() => navigate(`/animal/${animal.id}`)}
                      themeLight={themeLight}
                    />
                  )
                )
              }
            </div>
          </section>
        : null
      }
    </div>
  )
}