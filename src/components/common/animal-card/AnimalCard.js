export const AnimalCard = ({ className, animal, onClick, onLike }) => {
  return (
    <section className={className} onClick={onClick}>
      <img
        className="imagen"
        src={animal.image ? animal.image : '/icons/footprint.svg'}
      />
      <section className="card-info">
        <header>
          <div>
            <h3>{animal.name}</h3>
            <img src={`/icons/${animal.gender ? 'male' : 'female'}.svg`} />
          </div>
          {
            animal.favourite !== null
            ? <img
                className="like"
                src={`/icons/like${animal.favourite ? 'd' : ''}.svg`}
                alt="Like icon"
                onClick={onLike}
              />
            : null
          }
        </header>
        <div className="body">
          <ul>
            <li>Edad: {animal.age} años</li>
            <li>Tamaño: {animal.size.name}</li>
            <li>Raza: {animal.breed.name}</li>
          </ul>
        </div>
      </section>
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