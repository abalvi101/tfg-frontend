import { useNavigate } from "react-router-dom"
import Button from "../../common/button"

export default ({ className, }) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <section className="about_us">
        <span className="image"/>
        <div className="text">
          <p>
            Adogtanos somos una web sin ánimo de lucro en la que intentamos ayudar a los animales sin hogar.
          </p>
          <p>
            Nuestros principales propósitos son:
            <ul>
              <li>
                <b>Dar visibilidad</b> y, de este modo, ayudar a encontrar una familia a cualquier animal que lo necesite.
              </li>
              <li>
                <b>Facilitar</b>, a la persona que piensa adoptar un animal, <b>la búsqueda</b> de su compañero.
              </li>
              <li>
                <b>Ofrecer una digitalización</b> a aquellas organizaciones que no tengan suficientes recursos.
              </li>
            </ul>
          </p>
        </div>
      </section>
      <section className="adopt">
        <div className="text">
          <p>
            ¿Estás pensando en agrandar la familia y darle una mejor vida a aquellos que se lo merecen? Pues te encuentras en el sitio correcto.
          </p>
          <p>
            En Adogtanos podrás encontrar a animales que fueron abandonados o incluso llegaron a nacer en la calle. Somos un punto en común de muchas protectoras.
            Aquí encontrarás el compañero que que tanto has soñado. ¡No te lo pienses más!
          </p>
          <Button
            onClick={() => navigate('/adopciones')}
          >
            Animales en adopción
          </Button>
        </div>
        <span  className="image"/>
      </section>
    </div>
  )
}