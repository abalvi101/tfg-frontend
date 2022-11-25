import { useEffect } from "react";
import { useState } from "react"
import AnimalCard from "../../common/animal-card"

export const Adoptions = ({ className, }) => {

  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    setAnimals([
      {
        id: 1,
        image: "test/perro1.jpg",
        name: 'Miky',
        gender: true,
        age: 2,
        size: 'Mediano',
        breed: 'Galgo',
      },
      {
        id: 2,
        image: "test/perro2.jpg",
        name: 'Sara',
        gender: false,
        age: 5,
        size: 'Mediano',
        breed: 'Golden retriever',
      },
      {
        id: 3,
        image: "test/perro3.jpg",
        name: 'Curro',
        gender: true,
        age: 11,
        size: 'Pequeño',
        breed: 'Mestizo',
      },
      {
        id: 4,
        image: "test/perro1.jpg",
        name: 'Miky',
        gender: true,
        age: 2,
        size: 'Mediano',
        breed: 'Galgo',
      },
      {
        id: 5,
        image: "test/perro2.jpg",
        name: 'Sara',
        gender: false,
        age: 5,
        size: 'Mediano',
        breed: 'Golden retriever',
      },
      {
        id: 6,
        image: "test/perro3.jpg",
        name: 'Curro',
        gender: true,
        age: 11,
        size: 'Pequeño',
        breed: 'Mestizo',
      },
      {
        id: 7,
        image: "test/perro1.jpg",
        name: 'Miky',
        gender: true,
        age: 2,
        size: 'Mediano',
        breed: 'Galgo',
      },
      {
        id: 8,
        image: "test/perro2.jpg",
        name: 'Sara',
        gender: false,
        age: 5,
        size: 'Mediano',
        breed: 'Golden retriever',
      },
      {
        id: 9,
        image: "test/perro3.jpg",
        name: 'Curro',
        gender: true,
        age: 11,
        size: 'Pequeño',
        breed: 'Mestizo',
      },
      {
        id: 10,
        image: "test/perro1.jpg",
        name: 'Miky',
        gender: true,
        age: 2,
        size: 'Mediano',
        breed: 'Galgo',
      },
      {
        id: 11,
        image: "test/perro2.jpg",
        name: 'Sara',
        gender: false,
        age: 5,
        size: 'Mediano',
        breed: 'Golden retriever',
      },
      {
        id: 12,
        image: "test/perro3.jpg",
        name: 'Curro',
        gender: true,
        age: 11,
        size: 'Pequeño',
        breed: 'Mestizo',
      },
      {
        id: 13,
        image: "test/perro1.jpg",
        name: 'Miky',
        gender: true,
        age: 2,
        size: 'Mediano',
        breed: 'Galgo',
      },
      {
        id: 14,
        image: "test/perro2.jpg",
        name: 'Sara',
        gender: false,
        age: 5,
        size: 'Mediano',
        breed: 'Golden retriever',
      },
      {
        id: 15,
        image: "test/perro3.jpg",
        name: 'Curro',
        gender: true,
        age: 11,
        size: 'Pequeño',
        breed: 'Mestizo',
      },
      {
        id: 16,
        image: "test/perro1.jpg",
        name: 'Miky',
        gender: true,
        age: 2,
        size: 'Mediano',
        breed: 'Galgo',
      },
      {
        id: 17,
        image: "test/perro2.jpg",
        name: 'Sara',
        gender: false,
        age: 5,
        size: 'Mediano',
        breed: 'Golden retriever',
      },
      {
        id: 18,
        image: "test/perro3.jpg",
        name: 'Curro',
        gender: true,
        age: 11,
        size: 'Pequeño',
        breed: 'Mestizo',
      },
      {
        id: 19,
        image: "test/perro1.jpg",
        name: 'Miky',
        gender: true,
        age: 2,
        size: 'Mediano',
        breed: 'Galgo',
      },
      {
        id: 20,
        image: "test/perro2.jpg",
        name: 'Sara',
        gender: false,
        age: 5,
        size: 'Mediano',
        breed: 'Golden retriever',
      },
      {
        id: 21,
        image: "test/perro3.jpg",
        name: 'Curro',
        gender: true,
        age: 11,
        size: 'Pequeño',
        breed: 'Mestizo',
      },
    ])
  }, [])

  return (
    <div className={className}>
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
              />
            )
          )
        }
      </section>
    </div>
  )
}