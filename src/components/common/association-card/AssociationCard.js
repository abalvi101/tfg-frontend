export const AssociationCard = ({ className, association, onClick }) => {
  return (
    <section
      className={className}
      onClick={onClick}
    >
      <div className="logo" alt="logotipo"/>
      <section className="info">
        <h3>{association.name}</h3>
        <span>{`${association.city.name}, ${association.province.name}`}</span>
        {/* <span className="email">{association.email}</span> */}
        <span className="number_of_animals">{`${association.number_of_animals} animal${association.number_of_animals !== 1 ? 'es' : ''}`}</span>
      </section>
    </section>
  )
}