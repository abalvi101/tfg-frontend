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
            <div className="paw-print-1">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
            </div>
                
            <div className="paw-print-2">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
            </div>    
                
            <div className="paw-print-3">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
            </div>    
                
            <div className="paw-print-4">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
            </div>
{/*                 
            <div class="paw-print-5">
                <div class="pad large"></div>
                <div class="pad small-1"></div>
                <div class="pad small-2"></div>
                <div class="pad small-3"></div>
                <div class="pad small-4"></div>
            </div>
                
            <div class="paw-print-6">
                <div class="pad large"></div>
                <div class="pad small-1"></div>
                <div class="pad small-2"></div>
                <div class="pad small-3"></div>
                <div class="pad small-4"></div>
            </div>
                
            <div class="paw-print-7">
                <div class="pad large"></div>
                <div class="pad small-1"></div>
                <div class="pad small-2"></div>
                <div class="pad small-3"></div>
                <div class="pad small-4"></div>
            </div>

            <div class="paw-print-8">
                <div class="pad large"></div>
                <div class="pad small-1"></div>
                <div class="pad small-2"></div>
                <div class="pad small-3"></div>
                <div class="pad small-4"></div>
            </div>

            <div class="paw-print-9">
                <div class="pad large"></div>
                <div class="pad small-1"></div>
                <div class="pad small-2"></div>
                <div class="pad small-3"></div>
                <div class="pad small-4"></div>
            </div>

            <div class="paw-print-10">
                <div class="pad large"></div>
                <div class="pad small-1"></div>
                <div class="pad small-2"></div>
                <div class="pad small-3"></div>
                <div class="pad small-4"></div>
            </div> */}
          </div>
        : null
      }
    </main>
  )
}