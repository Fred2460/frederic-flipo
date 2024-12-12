import { NavLink } from 'react-router-dom'
import '../styles/header.scss';


function Header() {
  return (
    <div className='navCont'>
        <div className='navCont__block' role="region" aria-roledescription= "Menu de navigation principale" aria-label="Liens de navigation">
          <NavLink className='navCont__block--link' aria-label="Retourner au début de la page d'accueil" to="/#homepage">Accueil</NavLink>
          <NavLink className='navCont__block--link' aria-label="Aller à la section services" to="/#services">Services</NavLink>
          <NavLink className='navCont__block--link' aria-label="Aller à la section portfolio" to="/#portfolio">Portfolio</NavLink>
          <NavLink className='navCont__block--link' aria-label="Aller à la section compétences" to="/#competences">Compétences</NavLink>
          <NavLink className='navCont__block--link' aria-label="Aller à la page à propos" to="/APropos">A-Propos</NavLink>
          <NavLink className='navCont__block--linkB' aria-label="Aller au formulaire de contact" to="/#contact">A votre écoute</NavLink>
        </div>
    </div>
  )
}

export default Header
