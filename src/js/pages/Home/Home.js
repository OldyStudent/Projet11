import "./Home.css";
import { useEffect, useState } from "react";
import { AccommodationItem } from "../../components";
import AccommodationProvider from "../../../data/AccommodationProvider";

function Home() {
  const [accommodationList, setAccommodationList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await AccommodationProvider.getAllAccomodations();
      setAccommodationList(data);
    }
    fetchData();
  }, []);

  return (
    <main className="Home">
      <div className="Home__catch-phrase">
        <span>Chez vous,</span> partout et ailleurs
      </div>

      <section className="Home__gallery">
        {accommodationList &&
          accommodationList.map((item) => {
            return (
              <AccommodationItem
                key={item.id}
                id={item.id}
                title={item.title}
                cover={item.cover}
              />
            );
          })}
      </section>
    </main>
  );
}

export default Home;
