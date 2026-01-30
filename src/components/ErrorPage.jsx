import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Oops! Something went wrong </h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
