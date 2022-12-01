import axios from "axios";
import { useEffect } from "react";
import { ENDPOINTS } from "../../../consts/api";
import { useAuth } from "../../../hooks"

export default ({ className, }) => {
  const [user, userUpdate] = useAuth();

  useEffect(() => {
    if (!user.token) return userUpdate.logout()
    axios.get(ENDPOINTS.AUTH.GET_USER)
    .then(({data}) => {
      console.log('RESPONSE AUTH', data);
      if (data.success) {
        userUpdate.login(data.data);
      } else {
        userUpdate.logout();
      }
    })
    .catch((error) => {
      console.log('ERROR AUTH', error);
    })
  }, [])


  return (
    <div className={className}>
      <header className="header">
        <h1>Nombre usuario</h1>
      </header>
      <section>
        No sé qué pondré
      </section>
    </div>
  )
}