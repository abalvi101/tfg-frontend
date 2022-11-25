export const AnimalCard = ({ className, image, name, gender, age, size, breed }) => {
  return (
    <section className={className}>
      <img
        className="imagen"
        src={image}
      />
      <header>
        <h3>{name}</h3>
        <img src={`icons/${gender ? 'male' : 'female'}.svg`} />
      </header>
      <div className="body">
        <ul>
          <li>Edad: {age} años</li>
          <li>Tamaño: {size}</li>
          <li>Raza: {breed}</li>
        </ul>
      </div>
      <img
        className="acogida"
        src="icons/acogida.svg"
      />
    </section>
  )
}