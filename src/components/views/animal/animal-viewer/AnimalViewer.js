import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../../../hooks";
import ProfileImage from "../../../common/profile-image/ProfileImage.styled";
import Animal from "../Animal";

export default ({ className, animal }) => {
  let location = `${animal.name} se encuentra en `;

  const getLocation = () => {
    if (animal?.fostering) {
      return animal.fostering
    }
  }

  return (
    <div className={className}>
      <header className="header">
        <ProfileImage
          src={animal.image}
        />
        <h1>{animal.name} {animal.surname}</h1>
        <h4>{animal.association?.name}</h4>
      </header>
      <section className="info">
        <section>
          <div>
            <h4>Descripción</h4>
            <p className="description">
              {animal.description ?? 'Sin descripción'}
            </p>
          </div>
          <div>
            <h4>Localización</h4>
            <p>{`${animal.name} se encuentra en ${animal.city?.name}, ${animal.province?.name}.`}</p>
            {
              animal.fostering
              ? <p className="fostering">
                  Actualmente está en una casa de acogida, su localización podría haber variado.
                </p>
              : null
            }
          </div>
        </section>
        <section>
          <div>
            <h4>Tipo de animal</h4>
            <span>{animal.specie?.name}</span>
          </div>
          <div>
            <h4>Raza</h4>
            <span>{animal.breed?.name}</span>
          </div>
          <div>
            <h4>Tamaño</h4>
            <span>{animal.size?.name}</span>
          </div>
        </section>
        <section>
          <div>
            <h4>Género</h4>
            <span>
              {
                animal.gender !== null
                ? animal.gender === false
                  ? 'Hembra'
                  : 'Macho'
                : 'Sin datos'
              }
            </span>
          </div>
          <div>
            <h4>Fecha de nacimiento</h4>
            <span>{animal.birthday ?? 'Sin datos'}</span>
          </div>
          <div>
            <h4>Día que entró en la protectora</h4>
            <span>{animal.entry_date ?? 'Sin datos'}</span>
          </div>
        </section>
        <section>
          <div>
            <h4>Peso</h4>
            <span>{animal.weight ?? 'Sin datos'}</span>
          </div>
          <div>
            <h4>Color</h4>
            <span>{animal.color ?? 'Sin datos'}</span>
          </div>
          <div>
            <h4>Esterilizado</h4>
            <span>
              {
                animal.neutered !== null
                ? animal.gender === false
                  ? 'Sí'
                  : 'No'
                : 'Sin datos'
              }
            </span>
          </div>
        </section>
      </section>
    </div>
  )
}