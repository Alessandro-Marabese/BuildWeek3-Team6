import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/SuggestedPeople.css";

const SuggestedPeople = () => {
  const [clickedIcons, setClickedIcons] = useState({});

  const handleIconClick = (id) => {
    setClickedIcons((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const people = [
    {
      id: 1,
      name: "Alessia Bocconcello",
      title: "Grafica",
      image: "https://via.placeholder.com/48",
    },
    {
      id: 2,
      name: "Giorgio Galfione",
      title: "Fashion Designer",
      image: "https://via.placeholder.com/48",
    },
    {
      id: 3,
      name: "Maryna Vialichka",
      title: "Fashion designer | dal concept al prototipo",
      image: "https://via.placeholder.com/48",
    },
    {
      id: 4,
      name: "Riccardo Puglisi",
      title: "Fashion designer presso MFGA - MAKE FASHION GREAT AGAIN",
      image: "https://via.placeholder.com/48",
    },
    {
      id: 5,
      name: "Luca Chiabotto",
      title: "Responsabile di settore",
      image: "https://via.placeholder.com/48",
    },
    {
      id: 6,
      name: "Chiara Naretto",
      title: "Stylist assistant, Freelance fashion stylist, Fashion advisor",
      image: "https://via.placeholder.com/48",
    },
    {
      id: 7,
      name: "Daria Gastaldi",
      title: "Fashion designer",
      image: "https://via.placeholder.com/48",
    },
    {
      id: 8,
      name: "Asia Zuppa",
      title: "Jewellery and Accessories Design",
      image: "https://via.placeholder.com/48",
    },
    {
      id: 9,
      name: "Alessio Di Gangi",
      title: "Studente presso IED Istituto Europeo di Design",
      image: "https://via.placeholder.com/48",
    },
  ];

  return (
    <section className="suggested-wrapper d-md-none">
      <div className="suggested-container">
        <h3 className="mb-3">Altri profili simili</h3>
        <ul className="list-group">
          {people.map((person) => (
            <li key={person.id} className="list-group-item suggested-item">
              <img
                src={person.image}
                alt={person.name}
                className="profile-image"
              />
              <div className="profile-info">
                <p className="profile-name">{person.name}</p>
                <p className="profile-title">{person.title}</p>
              </div>

              <button
                className="connect-icon btn btn-light"
                onClick={() => handleIconClick(person.id)}
              >
                <i
                  className={`bi ${
                    clickedIcons[person.id] ? "bi-send-fill" : "bi-person-plus"
                  }`}
                ></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SuggestedPeople;
