import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react';
import '../styles/header.scss';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Ferme le menu après le clic sur un lien
  };

  return (
    <div className='navCont'>
      {/* Bouton Hamburger pour Mobile */}
      <button 
        className="navCont__hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Menu de navigation */}
        <div className={`navCont__block ${isOpen ? "navCont__block--open" : ""}`} role="region" aria-roledescription= "Menu de navigation principale" aria-label="Liens de navigation">
          <NavLink className='navCont__block--link' aria-label="Retourner au début de la page d'accueil" to="/#homepage" onClick={handleLinkClick}>Accueil</NavLink>
          <NavLink className='navCont__block--link' aria-label="Aller à la section services" to="/#services" onClick={handleLinkClick}>Services</NavLink>
          <NavLink className='navCont__block--link' aria-label="Aller à la section portfolio" to="/#portfolio" onClick={handleLinkClick}>Portfolio</NavLink>
          <NavLink className='navCont__block--link' aria-label="Aller à la section compétences" to="/#competences" onClick={handleLinkClick}>Compétences</NavLink>
          <NavLink className='navCont__block--link' aria-label="Aller à la page à propos" to="/APropos" onClick={handleLinkClick}>A-Propos</NavLink>
          <NavLink className='navCont__block--linkB' aria-label="Aller au formulaire de contact" to="/#contact" onClick={handleLinkClick}>A votre écoute</NavLink>
        </div>
    </div>
  )
}

export default Header
