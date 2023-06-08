import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../consts/api";
import { copyObject } from "../../utils";
import AnimalCard from "../../components/common/animal-card"
import Button from "../../components/common/button";
import Input from "../../components/common/input";
import { useAppState } from "../../hooks";
import AssociationCard from "../../components/common/association-card/AssociationCard.styled";

export const Associations = ({ className, }) => {

  const navigate = useNavigate();
  const [appState, appStateUpdate] = useAppState();
  const [associations, setAssociations] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [filteredProvinces, setFilteredProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filters, setFilters] = useState([
    {
      value: null,
      label: 'Provincia',
      key: 'province',
      type: 'select',
      options: [],
    },
    {
      value: null,
      label: 'Ciudad',
      key: 'city',
      type: 'select',
      options: [],
    },
  ])

  useEffect(() => {
    const getData = async () => {
      appStateUpdate.startLoading();
      await getAssociations();
      await axios
        .get(ENDPOINTS.LOCATION.GET_CITIES)
        .then(({data}) => {
          setCities(data.data);
          setFilteredCities(data.data);
        })
        .catch((error) => console.log('Error ciudades:', error));
      await axios
        .get(ENDPOINTS.LOCATION.GET_PROVINCES)
        .then(({data}) => {
          setProvinces(data.data);
          setFilteredProvinces(data.data);
        })
        .catch((error) => console.log('Error provincias:', error));
    }

    getData();
  }, [])

  useEffect(() => {
    let index = filters.findIndex(
      (field) => field.key === 'province'
    );
    if (index !== -1) {
      let auxFilters = copyObject(filters);
      auxFilters[index].options = filteredProvinces.map(
        (province) => ({
          key: province.id,
          value: province.id,
          name: province.name,
        })
      )
      auxFilters[index].options.unshift(
        {
          key: null,
          value: null,
          name: 'Cualquiera',
        }
      )
      setFilters(auxFilters);
    }
  }, [filteredProvinces])

  useEffect(() => {
    let index = filters.findIndex(
      (field) => field.key === 'city'
    );
    if (index !== -1) {
      let auxFilters = copyObject(filters);
      auxFilters[index].options = filteredCities.map(
        (city) => ({
          key: city.id,
          value: city.id,
          name: city.name,
        })
      )
      auxFilters[index].options.unshift(
        {
          key: null,
          value: null,
          name: 'Cualquiera',
        }
      )
      setFilters(auxFilters);
    }
  }, [filteredCities])

  const getAssociations = async () => {
    appStateUpdate.startLoading();
    let parameters = {}
    filters.map(
      (field) => {
        parameters[field.key] = field.value
      }
    )
    await axios
      .post(ENDPOINTS.ASSOCIATION.GET_FILTERED_ASSOCIATIONS, parameters)
      .then(({data}) => {
        console.log({associations: data.data})
        setAssociations(data.data);
      })
      .catch((error) => {
        console.log('error listado asociaciones', error)
      })
      .finally(() => appStateUpdate.finishLoading())
  }

  const onChangeFilterHandler = (value, index) => {
    let auxFilters = copyObject(filters);
    auxFilters[index].value = value;
    auxFilters = updateFilters(auxFilters, value, index);
    setFilters(auxFilters);
  }

  // const onLike = async (event, id) => {
  //   event.stopPropagation();
  //   appStateUpdate.startLoading();
  //   await axios
  //     .post(ENDPOINTS.AUTH.FAVOURITE, {animal_id: id})
  //     .then(({data}) => {
  //       if (data.success) {
  //         getAssociations();
  //       } else {
  //         console.log('Error en al añadir/quitar favorito');
  //       }
  //     })
  //     .catch((error) => console.log('Error en al añadir/quitar favorito', error))
  //     .finally(() => appStateUpdate.startLoading().finishLoading())
  // }

  const updateFilters = (auxFilters, value, index) => {
    
    if (auxFilters[index].key === 'province') {
      if (!value) {
        setFilteredCities(cities);
      } else {
        setFilteredCities(cities.filter(
          (city) => city.province_id === value
        ))


        let cityIndex = filters.findIndex(
          (field) => field.key === 'city'
        );
        if (cities.find((city) => city.id === auxFilters[cityIndex].value)?.province_id !== value)
          auxFilters[cityIndex].value = null;
      }
    }
    return auxFilters;
  }

  return (
    <div className={className}>
      <section className="filters">
        {
          filters.map(
            (filter, index) => (
              <Input
                {...filter}
                onChange={(value) => onChangeFilterHandler(value, index)}
              />
            )
          )
        }
        <Button
          className="filter_button"
          onClick={getAssociations}
        >
          Filtrar
        </Button>
      </section>
      <section className="associations">
        {
          associations.map(
            (association) => (
              <AssociationCard
                association={association}
                key={association.id}
                onClick={() => navigate(`/asociacion/${association.id}`)}
              />
            )
          )
        }
      </section>
    </div>
  )
}