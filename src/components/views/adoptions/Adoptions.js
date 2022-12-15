import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../../consts/api";
import { copyObject } from "../../../utils";
import AnimalCard from "../../common/animal-card"
import Button from "../../common/button";
import Input from "../../common/input";

export const Adoptions = ({ className, }) => {

  const navigate = useNavigate();
  const [animals, setAnimals] = useState([]);
  const [species, setSpecies] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState([
    {
      value: '',
      label: 'Especie',
      key: 'specie',
      type: 'select',
      options: [],
    },
    {
      value: '',
      label: 'Raza',
      key: 'breed',
      type: 'select',
      options: [],
    },
    {
      value: '',
      label: 'Tamaño',
      key: 'size',
      type: 'select',
      options: [],
    },
    {
      value: '',
      label: 'Provincia',
      key: 'province',
      type: 'select',
      options: [],
    },
    {
      value: '',
      label: 'Ciudad',
      key: 'city',
      type: 'select',
      options: [],
    },
    {
      value: '',
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
    getAnimals();
    axios
      .get(ENDPOINTS.LOCATION.GET_CITIES)
      .then(({data}) => {
        setCities(data.data);
      })
      .catch((error) => console.log('Error especies animales:', error))
    axios
      .get(ENDPOINTS.LOCATION.GET_PROVINCES)
      .then(({data}) => {
        setProvinces(data.data);
      })
      .catch((error) => console.log('Error especies animales:', error))
    axios
      .get(ENDPOINTS.ANIMAL.GET_SPECIES)
      .then(({data}) => {
        setSpecies(data.data);
      })
      .catch((error) => console.log('Error especies animales:', error))
    axios
      .get(ENDPOINTS.ANIMAL.GET_BREEDS)
      .then(({data}) => {
        setBreeds(data.data);
      })
      .catch((error) => console.log('Error razas animales:', error))
    axios
      .get(ENDPOINTS.ANIMAL.GET_SIZES)
      .then(({data}) => {
        setSizes(data.data);
      })
      .catch((error) => console.log('Error tamaños animales:', error))
  }, [])

  useEffect(() => {
    let index = filters.findIndex(
      (field) => field.key === 'province'
    );
    if (index !== -1) {
      let auxFilters = copyObject(filters);
      auxFilters[index].options = provinces.map(
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
          name: 'Todas',
        }
      )
      setFilters(auxFilters);
    }
  }, [provinces])

  useEffect(() => {
    let index = filters.findIndex(
      (field) => field.key === 'city'
    );
    if (index !== -1) {
      let auxFilters = copyObject(filters);
      auxFilters[index].options = cities.map(
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
          name: 'Todas',
        }
      )
      setFilters(auxFilters);
    }
  }, [cities])

  useEffect(() => {
    let index = filters.findIndex(
      (field) => field.key === 'specie'
    );
    if (index !== -1) {
      let auxFilters = copyObject(filters);
      auxFilters[index].options = species.map(
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
          name: 'Todas',
        }
      )
      setFilters(auxFilters);
    }
  }, [species])

  useEffect(() => {
    let index = filters.findIndex(
      (field) => field.key === 'breed'
    );
    if (index !== -1) {
      let auxFilters = copyObject(filters);
      auxFilters[index].options = breeds.map(
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
          name: 'Todas',
        }
      )
      setFilters(auxFilters);
    }
  }, [breeds])

  useEffect(() => {
    let index = filters.findIndex(
      (field) => field.key === 'size'
    );
    if (index !== -1) {
      let auxFilters = copyObject(filters);
      auxFilters[index].options = sizes.map(
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
          name: 'Todas',
        }
      )
      setFilters(auxFilters);
    }
  }, [sizes])

  const getAnimals = () => {
    let parameters = {}
    filters.map(
      (field) => {
        parameters[field.key] = field.value
      }
    )
    axios
      .post(ENDPOINTS.ANIMAL.GET_FILTERED_ANIMALS, parameters)
      .then(({data}) => {
        setAnimals(data.data);
      })
      .catch((error) => {
        console.log('error animals', error)
      })
  }

  const onChangeFilterHandler = (value, index) => {
    let auxFilters = copyObject(filters);
    auxFilters[index].value = value;
    auxFilters[index].error = '';
    setFilters(auxFilters);
  }

  const onLike = (event, id) => {
    event.stopPropagation();
    axios
      .post(ENDPOINTS.AUTH.FAVOURITE, {animal_id: id})
      .then(({data}) => {
        if (data.success) {
          getAnimals();
        } else {
          console.log('Error en al añadir/quitar favorito');
        }
      })
      .catch((error) => console.log('Error en al añadir/quitar favorito', error))
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