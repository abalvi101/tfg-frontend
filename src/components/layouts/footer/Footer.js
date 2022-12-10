export const Footer = ({ className, }) => {
  return (
    <footer className={className}>
      <div className="content">
        <section className="rrss">
          <img className="icon facebook" src="/icons/facebook.svg"/>
          <img className="icon instagram" src="/icons/instagram.svg"/>
          <img className="icon twitter" src="/icons/twitter.svg"/>
        </section>
        <section className="brand">
          <img src="/LogoWhite.svg" alt="Logo de Adogtanos"/>
          <h2>Adogtanos</h2>
        </section>
        <section className="links">
          <ul>
            <li>Contacto</li>
            <li>Aviso legal</li>
            <li>Política de cookies</li>
            <li>Política de privacidad</li>
          </ul>
        </section>
      </div>
    </footer>
  )
}