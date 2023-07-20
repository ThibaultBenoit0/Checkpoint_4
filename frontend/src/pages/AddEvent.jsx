import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";

function AddEvent() {
  const [addValidation, setAddValidation] = useState(false);

  const [eventInfos, setEventInfos] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    img: "",
    link: "",
    place: "",
    price: "",
  });

  const addEventHandleChange = (e) => {
    setEventInfos({ ...eventInfos, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const addEventHandler = (e) => {
    e.preventDefault();
    axios

      .post(`${import.meta.env.VITE_BACKEND_URL}/event`, eventInfos)
      .then((res) => {
        console.warn(res);
      })
      .catch((error) => {
        console.error(error);
      });
    setAddValidation(true);
  };

  const backHandler = () => {
    navigate("/");
  };

  const closeAddValidationHandler = () => {
    setAddValidation(false);
    navigate("/");
  };

  return (
    <div>
      <button type="button" className="backButton" onClick={backHandler}>
        <BsFillArrowLeftSquareFill className="backButtonIcon" />
      </button>

      {addValidation && (
        <div className="modifyValidationContainer">
          <h4>Votre évènement a bien été créé !</h4>
          <button
            type="button"
            onClick={closeAddValidationHandler}
            className="closeValidation"
          >
            <AiOutlineCloseSquare className="closeModifyIcon" />
          </button>
        </div>
      )}

      <form
        className="formAddEvent"
        id="formAddEvent"
        method="POST"
        onSubmit={addEventHandler}
      >
        <input
          type="text"
          placeholder="Nom de l'évènement"
          name="title"
          value={eventInfos.title}
          required
          onChange={addEventHandleChange}
        />

        <input
          type="text"
          placeholder="Date de l'évènement"
          name="date"
          value={eventInfos.date}
          required
          onChange={addEventHandleChange}
        />

        <input
          type="text"
          placeholder="Heure de début de l'évènement"
          name="time"
          value={eventInfos.time}
          required
          onChange={addEventHandleChange}
        />

        <input
          type="text"
          placeholder="Lieu de l'évènement"
          name="place"
          value={eventInfos.place}
          required
          onChange={addEventHandleChange}
        />

        <input
          type="text"
          placeholder="Description brève de l'évènement"
          name="description"
          value={eventInfos.description}
          required
          onChange={addEventHandleChange}
        />

        <input
          type="text"
          placeholder="Le lien URL de l'image"
          name="img"
          value={eventInfos.img}
          required
          onChange={addEventHandleChange}
        />

        <input
          type="text"
          placeholder="Lien vers l'évènement"
          name="link"
          value={eventInfos.link}
          onChange={addEventHandleChange}
        />

        <input
          type="number"
          placeholder="Prix (0 si gratuit)"
          name="price"
          value={eventInfos.price}
          onChange={addEventHandleChange}
          required
        />

        <button type="submit" form="formAddEvent" className="homeAddButton">
          AJOUTER L'ÉVÈNEMENT
        </button>
      </form>
    </div>
  );
}

export default AddEvent;
