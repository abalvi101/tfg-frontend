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
        <div className="view">
          {
            appState.loading
            ? 'Cargando'
            : null
          }
          <Outlet />
          {children}
        </div>
      </section>
      {/* <img src="background/Background.svg" /> */}
      <Footer/>
    </main>
  )
}