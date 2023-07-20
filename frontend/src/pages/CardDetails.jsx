import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function CardDetails() {
  const { id } = useParams();
  const [eventDetailsData, setEventDetailsData] = useState([]);

  useEffect(() => {
    axios

      .get(`${import.meta.env.VITE_BACKEND_URL}/event/${id}`)
      .then((res) => {
        setEventDetailsData(res.data);
      })

      .catch((err) =>
        console.error(
          "Une erreur est survenue dans la récupération des données",
          err
        )
      );
  }, []);

  const navigate = useNavigate();

  const backHandler = () => {
    navigate("/");
  };

  return (
    <div className="detailsContainer">
      <button type="button" className="backButton" onClick={backHandler}>
        <BsFillArrowLeftSquareFill className="backButtonIcon" />
      </button>

      <div className="cardDetailsContainer">
        <div className="cardDetailsInfoContainer">
          <div className="cardDetailsTitle">{eventDetailsData.title}</div>

          <div className="cardDetailsImg">
            <img src={eventDetailsData.img} alt="visuel de l'évènement" />
          </div>

          <div className="cardDetailsTimeContainer">
            <div className="cardDetailsDate">
              {eventDetailsData.date} - {eventDetailsData.time}
            </div>
          </div>

          <div className="cardDetailsPlace">
            Lieu : {eventDetailsData.place}
          </div>

          <div className="cardDetailsPrice">
            Prix:{" "}
            {eventDetailsData.price !== 0
              ? `${eventDetailsData.price}€`
              : "Gratuit"}
          </div>
          <div className="cardDetailsDescrption">
            {eventDetailsData.description}
          </div>

          {eventDetailsData.link && (
            <div className="cardDetailsLink">
              <a href={eventDetailsData.link}>Lien de l'évènement</a>
            </div>
          )}
        </div>

        <div className="cardDetailsBackground" />
      </div>
    </div>
  );
}

export default CardDetails;
