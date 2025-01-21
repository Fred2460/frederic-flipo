import { useState } from 'react'
import "../styles/main.scss"
//import { GrCircleInformation } from "react-icons/gr"; // Information


function Block ({ title, tech, icone, text1, text2 }) {

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

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
  };
  
  export default Block;
