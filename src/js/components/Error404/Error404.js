import "./Error404.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <section className="Error404">
      <div>
        <h1 className="Error404__title">404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>

      <Link to="/" className="Error404__home-link">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default Error404;
