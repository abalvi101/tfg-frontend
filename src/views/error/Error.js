import { useRouteError } from "react-router-dom";
import Layout from "../layouts/public-layout/Layout.styled";

export const Error = ({ className, }) => {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout>
      <div className={className}>
        <h1>Oops!</h1>
        <span>Lo sentimos, ha ocurrido un error</span>
        {
          error.status === 404
            ? <section>
                <h2>Página no encontrada</h2>
                <p>Revisa que la URL esté bien escrita, si sigue teniendo problemas contacta con nosotros <a>aquí</a>.</p>
              </section>
            : <section>{error.status} {error.statusText || error.message}</section>
        }
      </div>
    </Layout>
  );
}