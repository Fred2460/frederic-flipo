import { useState } from 'react'
import "../styles/main.scss"
import { GrCircleInformation } from "react-icons/gr"; // Information


function Block ({ title, tech, icone, text1, text2 }) {
/*
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
*/
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (
      <div className="services__block" role="article" aria-roledescription="Service" aria-label={`Service : ${title}`}>
      <div className="services__block--icone">{icone}</div>
      <h3 className="services__block--title">{title}</h3>
      <h4 className="services__block--texth4">{tech}</h4>
      <button onClick={openModal} className="services__block--button" aria-label={`En savoir plus sur ${title}`}>
        <GrCircleInformation /> En savoir plus
      </button>

      {/* Fenêtre modale */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal__overlay" onClick={closeModal}></div>
          <div className="modal__content">
            <button onClick={closeModal} className="modal__close-button" aria-label="Fermer la fenêtre">
              &times;
            </button>
            <div className="modal__content--icone">{icone}</div>
            <h3 className="modal__content--title">{title}</h3>
            <h4 className="modal__content--tech">{tech}</h4>
            <p className="modal__content--text">{text1}</p>
            <p className="modal__content--slogan">{text2}</p>
          </div>
        </div>
        )}
      </div>
    );
  };
  
  export default Block;

  /*
return (
  <div className={`services__block ${isActive ? 'active' : ''}`}
  onClick={toggleActive} role="article" aria-roledescription="Service" aria-label="Afficher la description du service" >
    <div className="services__block--icone">{icone}</div>
    <h3 className="services__block--title" aria-labelledby="Titre du service">{title}</h3>
    <h4 className="services__block--texth4">{tech}</h4>
    <p className="services__block--text" aria-describedby="Description du service">{text1}</p>
    <p className="services__block--text--B">-</p>
    <p className="services__block--text--B" aria-describedby="Avantages du service">{text2}</p>
  </div>
);
*/