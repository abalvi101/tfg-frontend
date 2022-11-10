import { useRouteError } from "react-router-dom";

export const Error = ({ className, }) => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={className}>
      <h1>Oops!</h1>
      <p>Lo sentimos, ha ocurrido un error</p>
      <p>
        {
          error.status === 404
            ? <i>Página no encontrada.</i>
            : <i>{error.statusText || error.message}</i>
        }
      </p>
    </div>
  );
}