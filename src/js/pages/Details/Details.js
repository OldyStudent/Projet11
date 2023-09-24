import "./Details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Carousel, DropDown, Error404, RatingStars } from "../../components";
import AccommodationProvider from "../../../data/AccommodationProvider";

function Details() {
  const { id } = useParams();
  const [accommodationData, setAccommodationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAccommodationData() {
      try {
        const result = await AccommodationProvider.getAccommodationById(id);
        setAccommodationData(result);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAccommodationData();
  }, [id]);

  if (loading) {
    return <div className="Details">Chargement en cours...</div>;
  }

  if (!accommodationData) {
    return <Error404 />;
  }

  return (
    <main className="Details">
      <>
        <Carousel pictures={accommodationData.pictures} />
        <section className="Details__informations">
          <div className="Details__informations__title-location">
            <h2 className="Details__informations__title">
              {accommodationData.title}
            </h2>
            <p className="Details__informations__location">
              {accommodationData.location}
            </p>
          </div>
          <div className="Details__informations__host">
            <p>{accommodationData.host.name}</p>
            <img
              src={accommodationData.host.picture}
              alt={accommodationData.host.name}
            />
          </div>
          <div className="Details__informations__tags">
            {accommodationData.tags.map((tag, index) => (
              <span key={tag} className="Details__informations__tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="Details__informations__rating">
            <RatingStars rating={accommodationData.rating} />
          </div>
        </section>
        <section className="Details__dropdowns">
          <DropDown title="Description" data={accommodationData.description} />
          <DropDown title="Équipements" data={accommodationData.equipments} />
        </section>
      </>
    </main>
  );
}

export default Details;
