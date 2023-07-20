import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import SingleCard from "../components/SingleCard";

function Home() {
  const [events, setEvents] = useState([]);

  function fetchEvent() {
    axios

      .get(`${import.meta.env.VITE_BACKEND_URL}/event`)
      .then((res) => {
        setEvents(res.data);
      })

      .catch((err) =>
        console.error(
          "Une erreur est survenue dans la récupération des données",
          err
        )
      );
  }

  useEffect(() => {
    fetchEvent();
  }, []);

  const handleFetchEvent = () => {
    fetchEvent();
  };

  return (
    <div className="homeContainer">
      <NavLink to="/add">
        <button type="button" className="homeAddButton">
          AJOUTER UN ÉVÈNEMENT
        </button>
      </NavLink>
      <div className="homeCardsContainer">
        {events.map((el) => {
          return (
            <SingleCard
              key={el.id}
              id={el.id}
              title={el.title}
              date={el.date}
              description={el.description}
              img={el.img}
              link={el.link}
              place={el.place}
              price={el.price}
              time={el.time}
              fetchEvent={handleFetchEvent}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
