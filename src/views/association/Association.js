import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import AnimalCard from "../../components/common/animal-card";
import { ENDPOINTS } from "../../consts/api";
import { useAppState } from "../../hooks";

export const Association = ({ className }) => {
  
  const navigate = useNavigate();
  const { associationID } = useParams();
  const [association, setAssociation] = useState({});
  const [appState, appStateUpdate] = useAppState();

  useEffect(() => {
    getAssociation();
  }, [associationID])

  const getAssociation = async () => {
    appStateUpdate.startLoading();
    await axios
      .post(ENDPOINTS.ASSOCIATION.GET_ASSOCIATION_INFO, {association_id: associationID})
      .then(({data}) => {
        if (data.success) {
          setAssociation(data.data);
        } else {
          console.log('Error getting association info:', data.message);
        }
      })
      .catch((error) => {
        console.log('Error getting association info', error);
        appStateUpdate.newNotification({
          type: 'error',
          message: 'Error, pruebe a actualizar la página.'
        });
      })
      .finally(() => appStateUpdate.finishLoading())
  }

  const onLike = async (event, id) => {
    event.stopPropagation();
    appStateUpdate.startLoading();
    await axios
      .post(ENDPOINTS.AUTH.FAVOURITE, {animal_id: id})
      .then(({data}) => {
        if (data.success) {
          getAssociation();
        } else {
          console.log('Error en al añadir/quitar favorito');
        }
      })
      .catch((error) => {
        console.log('Error en al añadir/quitar favorito', error);
        appStateUpdate.newNotification({
          type: 'error',
          message: 'Error al marcar como favorito.'
        });
      })
      .finally(() => appStateUpdate.startLoading().finishLoading())
  }

  return (
    <div className={className}>
      <section className='association-info'>
        <span
          alt="logotipo"
          className="logo"
          style={
            association?.image
              ? {
                  backgroundImage: `url(${association.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }
              : { backgroundColor: 'grey' }
          }
        />
        <div>
          <h1>{association?.name}</h1>
          <span className='location'>{`${association?.city?.name}, ${association?.province?.name}`}</span>
        </div>
        {
          association.description &&
          <section className='description'>
            <h4>Descripción</h4>
            <p>{association.description}</p>
          </section>
        }
      </section>
      <section className='adoption-animals'>
        <h4>Animales en adopción ({association?.animals?.length})</h4>
        <div className='animals'>
          {
            association?.animals?.map(
              (animal) => (
                <AnimalCard
                  animal={animal}
                  key={animal.id}
                  onClick={() => navigate(`/animal/${animal.id}`)}
                  onLike={(event) => onLike(event, animal.id)}
                />
              )
            )
          }
        </div>
      </section>
    </div>
  )
}