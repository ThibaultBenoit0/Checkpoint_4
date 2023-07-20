import axios from "axios";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function SingleCard({ id, title, date, img, place, price, time, fetchEvent }) {
  const deleteHandler = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/event/${id}`)
      .then(() => fetchEvent())
      .catch((err) => console.error(err));
  };

  return (
    <div className="content">
      <div className="cardContainer">
        <div className="cardTimeContainer">
          <div className="cardDate">
            {date} - {time}
          </div>
        </div>

        <div className="cardImg">
          <img src={img} alt="visuel de l'évènement" />
        </div>

        <div className="cardInfoContainer">
          <div className="cardTitle">{title}</div>

          <div className="cardPlace">Lieu : {place}</div>

          <div className="cardPrice">
            Prix: {price !== 0 ? `${price}€` : "Gratuit"}
          </div>
          <NavLink to={`/${id}`}>
            <button type="button" className="cardDeatilsButton">
              DETAILS
            </button>
          </NavLink>
        </div>

        <div className="cardBackground" />
      </div>
      <div className="cardButtonContainer">
        <NavLink to={`/modify/${id}`}>
          <button type="button" className="cardButton">
            MODIFIER
          </button>
        </NavLink>
        <button type="button" onClick={deleteHandler} className="cardButton">
          SUPPRIMER
        </button>
      </div>
    </div>
  );
}

SingleCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  fetchEvent: PropTypes.func.isRequired,
};

export default SingleCard;
