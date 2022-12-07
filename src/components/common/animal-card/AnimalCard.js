export const AnimalCard = ({ className, animal, onClick }) => {
  return (
    <section className={className} onClick={onClick}>
      <img
        className="imagen"
        src={animal.image ? animal.image : '/icons/footprint.svg'}
      />
      <header>
        <h3>{animal.name}</h3>
        <img src={`/icons/${animal.gender ? 'male' : 'female'}.svg`} />
      </header>
      <div className="body">
        <ul>
          <li>Edad: {animal.age} años</li>
          <li>Tamaño: {animal.size.name}</li>
          <li>Raza: {animal.breed.name}</li>
        </ul>
      </div>
      {
        animal.fostering &&
        <img
          className="acogida"
          src="/icons/acogida.svg"
        />
      }
    </section>
  )
}