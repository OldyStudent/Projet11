import "./Carousel.css";
import arrowIcon from "../../../assets/icons/arrow_horizontal.svg";
import { useState } from "react";

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pictureCount = pictures.length;
  const moreThanOnePicture = pictureCount > 1;

  function handleClick(displayNext) {
    setCurrentIndex(
      (previousValue) =>
        (previousValue + (displayNext ? 1 : -1) + pictureCount) % pictureCount,
    );
  }

  return (
    <section className="Carousel">
      {moreThanOnePicture && (
        <img
          src={arrowIcon}
          alt="Précédent"
          className="Carousel__controller Carousel__controller--left"
          onClick={() => handleClick(false)}
        />
      )}

      <img
        src={pictures[currentIndex]}
        alt={`Aperçu numero ${currentIndex + 1}`}
        className="Carousel__current-image"
      />

      {moreThanOnePicture && (
        <img
          src={arrowIcon}
          alt="Suivant"
          className="Carousel__controller"
          onClick={() => handleClick(true)}
        />
      )}

      {moreThanOnePicture && (
        <p className="Carousel__current-image-index">
          {currentIndex + 1} / {pictureCount}
        </p>
      )}
    </section>
  );
}

export default Carousel;
