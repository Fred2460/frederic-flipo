import '../styles/footer.scss';
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <section className='footer__logos'>
        <a href="https://github.com/Fred2460" target="_blank" rel="noopener noreferrer" aria-label="Lien vers GitHub">
          <IoLogoGithub aria-label="Icône GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/frederic-flipo-20190360" target="_blank" rel="noopener noreferrer" aria-label="Lien vers LinkedIn">
          <IoLogoLinkedin aria-label="Icône LinkedIn" />
        </a>
      </section>
      <section className="footer__coord" aria-labelledby="Informations de contact">
        <ul className="footer__coord__contact">
        	<li className="footer__coord__contact--title">Ma localisation</li>
          <li aria-label="code postal, ville et pays">60750 Choisy-au-Bac, France</li>
          <li>Proximité de Compiègne (60 - Oise)</li>
        </ul>
        <ul className="footer__coord__contact">
        	<li className="footer__coord__contact--title">Horaires d'appel</li>
        	<li aria-label="Horaires d'appel">du lundi au vendredi de 10h à 19h</li>
          <li aria-label="Telephone">+33 7 68 62 94 89</li>
        </ul>
      </section>
      <p aria-label="Propriétaire du site">© {currentYear} Frederic FLIPO. Tous droits réservés</p>
    </div>
  )
}
  
export default Footer
  