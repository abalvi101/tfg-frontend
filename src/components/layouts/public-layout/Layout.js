
export const Layout = ({ className, children, ...props }) => {
  return (
    <main className={className}>
      <header>
        TFG Protectoras
        <ul>
          <li>Inicio</li>
          <li>Adopciones</li>
        </ul>
      </header>
      <section className="main-body">
        {children}
      </section>
      <footer>
        Footer vasilon
      </footer>
    </main>
  )
}