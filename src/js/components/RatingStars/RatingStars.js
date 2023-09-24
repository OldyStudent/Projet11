import "./RatingStars.css";
import starIcon from "../../../assets/icons/star-active.png";
import emptyStarIcon from "../../../assets/icons/star-inactive.png";

const RatingStars = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <img
      key={`star-${i}`}
      src={i < rating ? starIcon : emptyStarIcon}
      alt={`Étoile ${i + 1}`}
    />
  ));

  return <div className="RatingStars">{stars}</div>;
};

export default RatingStars;
