import "./AccommodationItem.css";
import { Link } from "react-router-dom";

function AccommodationItem({ id, title, cover }) {
  return (
    <Link to={`/details/${id}`} className="AccomodationItem">
      <img src={cover} alt={title} className="AccomodationItem__cover" />
      <p className="AccomodationItem__title">{title}</p>
    </Link>
  );
}

export default AccommodationItem;
