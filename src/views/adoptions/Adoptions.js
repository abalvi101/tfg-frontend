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

export const Adoptions = ({ className, }) => {

  const navigate = useNavigate();
  const [appState, appStateUpdate] = useAppState();
  const [animals, setAnimals] = useState([]);
  const [species, setSpecies] = useState([]);
  const [filteredSpecies, setFilteredSpecies] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [filteredSizes, setFilteredSizes] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [filteredProvinces, setFilteredProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filters, setFilters] = useState([
    {
      value: null,
      label: 'Especie',
      key: 'specie',
      type: 'select',
      options: [],
    },
    {
      value: null,
      label: 'Raza',
      key: 'breed',
      type: 'select',
      options: [],
      consolee: true
    },
    {
      value: null,
      label: 'Tamaño',
      key: 'size',
      type: 'select',
      options: [],
    },
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
    {
      value: null,
      label: 'Género',
      key: 'gender',
      type: 'select',
      options: [
        {
          value: null,
          name: 'Todos',
          key: 'Todos',
        },
        {
          value: true,
          name: 'Macho',
          key: 'Macho',
        },
        {
          value: false,
          name: 'Hembra',
          key: 'Hembra',
        },
      ],
    },
  ])

  useEffect(() => {
    const getData = async () => {
      appStateUpdate.startLoading();
      await getAnimals();
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
      await axios
        .get(ENDPOINTS.ANIMAL.GET_SPECIES)
        .then(({data}) => {
          setSpecies(data.data);
          setFilteredSpecies(data.data);
        })
        .catch((error) => console.log('Error especies animales:', error));
      await axios
        .get(ENDPOINTS.ANIMAL.GET_BREEDS)
        .then(({data}) => {
          setBreeds(data.data);
          setFilteredBreeds(data.data);
        })
        .catch((error) => console.log('Error razas animales:', error));
      await axios
        .get(ENDPOINTS.ANIMAL.GET_SIZES)
        .then(({data}) => {
          setSizes(data.data);
          setFilteredSizes(data.data);
        })
        .catch((error) => {
          console.log('Error tamaños animales:', error);
          appStateUpdate.newNotification({
            type: 'error',
            message: 'Error, pruebe a actualizar la pagina.'
          });
        });
      appStateUpdate.finishLoading();
    }

    // setTimeout( () => {
      getData();
    // }, 2000000);
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

  useEffect(() => {
    let index = filters.findIndex(
      (field) => field.key === 'specie'
    );
    if (index !== -1) {
      let auxFilters = copyObject(filters);
      auxFilters[index].options = filteredSpecies.map(
        (specie) => ({
          key: specie.id,
          value: specie.id,
          name: specie.name,
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
  }, [filteredSpecies])

  useEffect(() => {
    let index = filters.findIndex(
      (field) => field.key === 'breed'
    );
    if (index !== -1) {
      let auxFilters = copyObject(filters);
      auxFilters[index].options = filteredBreeds.map(
        (breed) => ({
          key: breed.id,
          value: breed.id,
          name: breed.name,
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
  }, [filteredBreeds])

  useEffect(() => {
    let index = filters.findIndex(
      (field) => field.key === 'size'
    );
    if (index !== -1) {
      let auxFilters = copyObject(filters);
      auxFilters[index].options = filteredSizes.map(
        (size) => ({
          key: size.id,
          value: size.id,
          name: `${size.code} - ${size.name}`,
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
  }, [filteredSizes])

  const getAnimals = async () => {
    appStateUpdate.startLoading();
    let parameters = {}
    filters.map(
      (field) => {
        parameters[field.key] = field.value
      }
    )
    await axios
      .post(ENDPOINTS.ANIMAL.GET_FILTERED_ANIMALS, parameters)
      .then(({data}) => {
        setAnimals(data.data);
      })
      .catch((error) => {
        console.log('error animals', error);
        appStateUpdate.newNotification({
          type: 'error',
          message: 'Error, pruebe a actualizar la página.'
        })
      })
      .finally(() => appStateUpdate.finishLoading())
  }

  const onChangeFilterHandler = (value, index) => {
    let auxFilters = copyObject(filters);
    auxFilters[index].value = value;
    auxFilters = updateFilters(auxFilters, value, index);
    setFilters(auxFilters);
  }

  const onLike = async (event, id) => {
    event.stopPropagation();
    appStateUpdate.startLoading();
    await axios
      .post(ENDPOINTS.AUTH.FAVOURITE, {animal_id: id})
      .then(({data}) => {
        if (data.success) {
          getAnimals();
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

  const updateFilters = (auxFilters, value, index) => {
    if (auxFilters[index].key === 'specie') {
      if (!value) {
        setFilteredBreeds(breeds);
      } else {
        setFilteredBreeds(breeds.filter(
          (breed) => breed.animal_specie_id === value
        ))


        let breedIndex = filters.findIndex(
          (field) => field.key === 'breed'
        );
        if (breeds.find((breed) => breed.id === auxFilters[breedIndex].value)?.animal_specie_id !== value)
          auxFilters[breedIndex].value = null;
      }
    }
    
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
          onClick={getAnimals}
        >
          Filtrar
        </Button>
      </section>
      <section className="animals">
        {
          animals.map(
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
      </section>
    </div>
  )
}