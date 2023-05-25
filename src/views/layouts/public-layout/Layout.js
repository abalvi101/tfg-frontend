import { Outlet } from "react-router-dom"
import { useAppState } from "../../../hooks"
import Footer from "../footer/Footer.styled";
import Header from "../header"

export const Layout = ({ className, children, ...props }) => {
  
  const [appState, appStateUpdate] = useAppState();

  return (
    <main className={className}>
      <Header />
      <section className="main-body">
          <Outlet />
          {children}
      </section>
      {/* <img src="background/Background.svg" /> */}
      <Footer/>
      {
        appState.loading
        ? <div id="loader">
            <h1>Cargando...</h1>
          </div>
        : null
      }
    </main>
  )
}