import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";

function ModifyEvent() {
  const [modifyValidation, setModifyValidation] = useState(false);

  const [formModifyData, setFormModifyData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    img: "",
    link: "",
    place: "",
    price: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/event/${id}`)
      .then((res) => {
        const eventData = res.data;
        setFormModifyData({
          title: eventData.title,
          date: eventData.date,
          time: eventData.time,
          description: eventData.description,
          img: eventData.img,
          link: eventData.link,
          place: eventData.place,
          price: eventData.price,
        });
      })

      .catch((err) =>
        console.error(
          "Une erreur est survenue dans la récupération des données",
          err
        )
      );
  }, []);

  const handleChangeModify = (e) => {
    setFormModifyData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const modifyEventHandler = (e) => {
    e.preventDefault();

    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/event/${id}`, formModifyData)
      .then((res) => {
        console.warn(res);
      })
      .catch((error) => {
        console.error(error);
      });

    setModifyValidation(true);
  };

  const backHandler = () => {
    navigate("/");
  };

  const closeModifyValidationHandler = () => {
    navigate(`/${id}`);
  };

  return (
    <div>
      <button type="button" className="backButton" onClick={backHandler}>
        <BsFillArrowLeftSquareFill className="backButtonIcon" />
      </button>

      {modifyValidation && (
        <div className="modifyValidationContainer">
          <h4>Votre évènement a bien été modifié !</h4>
          <button
            type="button"
            onClick={closeModifyValidationHandler}
            className="closeValidation"
          >
            <AiOutlineCloseSquare className="closeModifyIcon" />
          </button>
        </div>
      )}

      <form
        className="formModifyEvent"
        id="formModifyEvent"
        method="PUT"
        onSubmit={modifyEventHandler}
      >
        <input
          type="text"
          placeholder="Nom de l'évènement"
          name="title"
          value={formModifyData.title}
          onChange={handleChangeModify}
        />

        <input
          type="text"
          placeholder="Date de l'évènement"
          name="date"
          value={formModifyData.date}
          onChange={handleChangeModify}
        />

        <input
          type="text"
          placeholder="Heure de début de l'évènement"
          name="time"
          value={formModifyData.time}
          onChange={handleChangeModify}
        />

        <input
          type="text"
          placeholder="Lieu de l'évènement"
          name="place"
          value={formModifyData.place}
          onChange={handleChangeModify}
        />

        <input
          type="text"
          placeholder="Description brève de l'évènement"
          name="description"
          value={formModifyData.description}
          onChange={handleChangeModify}
        />

        <input
          type="text"
          placeholder="Le lien URL de l'image"
          name="img"
          value={formModifyData.img}
          onChange={handleChangeModify}
        />

        <input
          type="text"
          placeholder="Lien vers l'évènement"
          name="link"
          value={formModifyData.link}
          onChange={handleChangeModify}
        />

        <input
          type="number"
          placeholder="Prix (Optionnel)"
          name="price"
          value={formModifyData.price}
          onChange={handleChangeModify}
        />

        <button
          type="submit"
          form="formModifyEvent"
          className="homeModifyButton "
        >
          MODIFIER L'ÉVÈNEMENT
        </button>
      </form>
    </div>
  );
}

export default ModifyEvent;
