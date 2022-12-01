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
  ])

  useEffect(() => {
    getAnimals();
    axios
      .get(ENDPOINTS.ANIMAL.GET_SPECIES)
      .then(({data}) => {
        console.log('Especies', data.data);
        setSpecies(data.data);
      })
      .catch((error) => console.log('Error especies animales:', error))
    axios
      .get(ENDPOINTS.ANIMAL.GET_BREEDS)
      .then(({data}) => {
        console.log('Razas', data.data);
        setBreeds(data.data);
      })
      .catch((error) => console.log('Error razas animales:', error))
    axios
      .get(ENDPOINTS.ANIMAL.GET_SIZES)
      .then(({data}) => {
        console.log('Tamaños', data.data);
        setSizes(data.data);
      })
      .catch((error) => console.log('Error tamaños animales:', error))


    // setAnimals([
    //   {
    //     id: 1,
    //     image: "test/perro1.jpg",
    //     name: 'Miky',
    //     gender: true,
    //     age: 2,
    //     size: 'Mediano',
    //     breed: 'Galgo',
    //   },
    //   {
    //     id: 2,
    //     image: "test/perro2.jpg",
    //     name: 'Sara',
    //     gender: false,
    //     age: 5,
    //     size: 'Mediano',
    //     breed: 'Golden retriever',
    //   },
    //   {
    //     id: 3,
    //     image: "test/perro3.jpg",
    //     name: 'Curro',
    //     gender: true,
    //     age: 11,
    //     size: 'Pequeño',
    //     breed: 'Mestizo',
    //   },
    //   {
    //     id: 4,
    //     image: "test/perro1.jpg",
    //     name: 'Miky',
    //     gender: true,
    //     age: 2,
    //     size: 'Mediano',
    //     breed: 'Galgo',
    //   },
    //   {
    //     id: 5,
    //     image: "test/perro2.jpg",
    //     name: 'Sara',
    //     gender: false,
    //     age: 5,
    //     size: 'Mediano',
    //     breed: 'Golden retriever',
    //   },
    //   {
    //     id: 6,
    //     image: "test/perro3.jpg",
    //     name: 'Curro',
    //     gender: true,
    //     age: 11,
    //     size: 'Pequeño',
    //     breed: 'Mestizo',
    //   },
    //   {
    //     id: 7,
    //     image: "test/perro1.jpg",
    //     name: 'Miky',
    //     gender: true,
    //     age: 2,
    //     size: 'Mediano',
    //     breed: 'Galgo',
    //   },
    //   {
    //     id: 8,
    //     image: "test/perro2.jpg",
    //     name: 'Sara',
    //     gender: false,
    //     age: 5,
    //     size: 'Mediano',
    //     breed: 'Golden retriever',
    //   },
    //   {
    //     id: 9,
    //     image: "test/perro3.jpg",
    //     name: 'Curro',
    //     gender: true,
    //     age: 11,
    //     size: 'Pequeño',
    //     breed: 'Mestizo',
    //   },
    //   {
    //     id: 10,
    //     image: "test/perro1.jpg",
    //     name: 'Miky',
    //     gender: true,
    //     age: 2,
    //     size: 'Mediano',
    //     breed: 'Galgo',
    //   },
    //   {
    //     id: 11,
    //     image: "test/perro2.jpg",
    //     name: 'Sara',
    //     gender: false,
    //     age: 5,
    //     size: 'Mediano',
    //     breed: 'Golden retriever',
    //   },
    //   {
    //     id: 12,
    //     image: "test/perro3.jpg",
    //     name: 'Curro',
    //     gender: true,
    //     age: 11,
    //     size: 'Pequeño',
    //     breed: 'Mestizo',
    //   },
    //   {
    //     id: 13,
    //     image: "test/perro1.jpg",
    //     name: 'Miky',
    //     gender: true,
    //     age: 2,
    //     size: 'Mediano',
    //     breed: 'Galgo',
    //   },
    //   {
    //     id: 14,
    //     image: "test/perro2.jpg",
    //     name: 'Sara',
    //     gender: false,
    //     age: 5,
    //     size: 'Mediano',
    //     breed: 'Golden retriever',
    //   },
    //   {
    //     id: 15,
    //     image: "test/perro3.jpg",
    //     name: 'Curro',
    //     gender: true,
    //     age: 11,
    //     size: 'Pequeño',
    //     breed: 'Mestizo',
    //   },
    //   {
    //     id: 16,
    //     image: "test/perro1.jpg",
    //     name: 'Miky',
    //     gender: true,
    //     age: 2,
    //     size: 'Mediano',
    //     breed: 'Galgo',
    //   },
    //   {
    //     id: 17,
    //     image: "test/perro2.jpg",
    //     name: 'Sara',
    //     gender: false,
    //     age: 5,
    //     size: 'Mediano',
    //     breed: 'Golden retriever',
    //   },
    //   {
    //     id: 18,
    //     image: "test/perro3.jpg",
    //     name: 'Curro',
    //     gender: true,
    //     age: 11,
    //     size: 'Pequeño',
    //     breed: 'Mestizo',
    //   },
    //   {
    //     id: 19,
    //     image: "test/perro1.jpg",
    //     name: 'Miky',
    //     gender: true,
    //     age: 2,
    //     size: 'Mediano',
    //     breed: 'Galgo',
    //   },
    //   {
    //     id: 20,
    //     image: "test/perro2.jpg",
    //     name: 'Sara',
    //     gender: false,
    //     age: 5,
    //     size: 'Mediano',
    //     breed: 'Golden retriever',
    //   },
    //   {
    //     id: 21,
    //     image: "test/perro3.jpg",
    //     name: 'Curro',
    //     gender: true,
    //     age: 11,
    //     size: 'Pequeño',
    //     breed: 'Mestizo',
    //   },
    // ])
  }, [])

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
      console.log('ESPECIE', auxFilters);
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
      console.log('BREEDS', auxFilters);
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
      console.log('SIZES', auxFilters);
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
        console.log('response animals', data);
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
        <Button onClick={getAnimals}>
          Filtrar
        </Button>
      </section>
      <section className="animals">
        {
          animals.map(
            (animal) => (
              <AnimalCard
                key={animal.id}
                image={animal.image}
                name={animal.name}
                gender={animal.gender}
                age={animal.age}
                size={animal.size}
                breed={animal.breed}
                onClick={() => navigate(`/animal/${animal.id}`)}
              />
            )
          )
        }
      </section>
    </div>
  )
}