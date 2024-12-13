import pictureAccueil from '../assets/eberhard-grossgasteiger-e0M3I9vQ6hg-unsplash.jpg';
import pictureProfile from '../assets/frederic_flipo_2023_n&b.jpg';
import '../styles/main.scss';
import Card from '../components/Card';
import Block from '../components/Block';
import LocalData from '../components/LocalData';
import { Element } from "react-scroll";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import skillData from '../datas/skills.json'
import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet';

// Icônes Services
import { MdOutlineScreenSearchDesktop } from "react-icons/md"; // Visibilité Front-end
import { FaUserGear } from "react-icons/fa6"; // Services Back-end
import { MdVisibility } from "react-icons/md"; // Référencement naturel SEO
import { BsGeoAltFill } from "react-icons/bs"; // Référencement local SEO
import { MdOutlineAccessibleForward } from "react-icons/md"; // Accessibilité
import { SiFreelancer } from "react-icons/si"; // Freelance

function Accueil({ projets }) {

  /* gestion des redirections */
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="main">

      <Helmet>
        <html lang="fr" />
        <title>Frédéric FLIPO - Développeur Web freelance</title>
        <meta name="description" content="Page d'accueil du site de Frederic FLIPO, Développeur Web freelance." />
        <meta name="keywords" content="accueil, home, page principale" />
        <meta name="author" content="Frederic FLIPO" />
        <meta charset="UTF-8" />
        <meta name="language" content="fr-FR" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Frederic FLIPO - Développeur Web freelance" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://frederic.flipo.github.io/assets/images/image_github_ffl.png" />
        <meta property="og:url" content="https://frederic.flipo.github.io/" />
        <meta property="og:description" content="Créez de la valeur dans l'écosystème internet" />
        <meta name="twitter:title" content="Frederic FLIPO - Développeur Web freelance" />
        <meta name="twitter:description" content="Créez de la valeur dans l'écosystème internet" />
        <meta name="twitter:image" content="https://frederic.flipo.github.io/assets/images/image_github_ffl.png" />
        <meta name="twitter:url" content="https://frederic.flipo.github.io/" />
        <LocalData />
      </Helmet>

      {/* section Accueil haut de page */}
      <section className="welcome" id="homepage" role="banner" aria-labelledby="Entête Accueil">
        <Element name="homepage"></Element>
        <span className="welcome__block1"></span>
        <span className="welcome__block2"></span>
        <img className="welcome__pictureAccueil" src={pictureAccueil} alt="Paysage de montagne" aria-label="Accueil - Image d'un paysage de montagne" />
        <div className="welcome__container">
          <h1 className="welcome__container--banner">Créez de la valeur dans l'écosystème internet</h1>
          <div className="welcome__container__ident">
            <img className="welcome__container__ident--pictureProfile" src={pictureProfile} alt="Profile" aria-label="Photo de profile Frederic Flipo" />
            <div className="welcome__container__ident--sub">
                <h2 className="welcome__container__ident--sub--texth2">Frédéric FLIPO</h2>  
                <h3 className="welcome__container__ident--sub--texth3">Développeur Web</h3>
            </div>
          </div>         
        </div>

      </section>

      {/* section Services */}
      <section className="block" id="services" aria-labelledby="section Services">
        <Element  name="services" className="block__title">Services</Element>          
        <div className="block__line"></div>
        <div className="services">
          <Block
            title="Augmentez votre visibilité"
            tech="Front-end"
            icone={<MdOutlineScreenSearchDesktop aria-label="Icône représentant la visibilité sur internet" />}
            text1="Vous souhaitez attirer plus de clients, vous rendre visible sur internet? La solution est simple: créez votre propre site vitrine." 
            text2="Intégrez les technologies récentes et favorisez la conception Responsive!"
          />

          <Block 
            title="Ajoutez des services à votre site web"
            tech="Back-end"
            icone={<FaUserGear aria-label="Icône représentant un processus utilisateur" />}
            text1="Vous souhaitez fidéliser vos prospects et clients, donner à votre entreprise une image professionnelle?" 
            text2="Ajoutez des fonctionnalités intelligentes."
          />

          <Block 
            title="Augmentez votre trafic"
            tech="SEO"
            icone={<MdVisibility aria-label="Icône représentant la visibilité par un oeil" />}
            text1="Améliorez le référencement naturel de votre site, sa performance, optimisez son contenu, intégrez le référencement local." 
            text2="Devenez visible sur les moteurs de recherche!"
          />

          <Block 
            title="Améliorez l'expérience des utilisateurs locaux"
            tech="SEO local"
            icone={<BsGeoAltFill aria-label="Icône représentant la position sur une carte" />}
            text1="Optimisez votre visibilité locale avec Goocle Business Profile (anc. Google My Business), intégrez vos microdonnées et structurez les."
            text2="Soyez facile à trouver dans votre zone géographique!"
          />

          <Block
            title="Soyez plus inclusifs pour le handicap"
            tech="Accessibilité"
            icone={<MdOutlineAccessibleForward aria-label="Icône représentant l'accessibilité" />}
            text1="Rendez votre site web utilisable par le plus grand nombre, y compris les personnes ayant des handicaps."
            text2="Aidez-les à Percevoir, Comprendre, Naviguer et Interagir de manière efficace!"
          />

          <Block 
            title="Vous manquez de ressources?"
            tech="Appelez un freelance"
            icone={<SiFreelancer aria-label="Icône représentant la flexibilité" />}
            text1="Pour mettre en oeuvre vos projets, il vous manque des compétences ou simplement des ressources. Renforcez votre équipe selon vos besoins."
            text2="Gagnez en rapidité et en flexibilité!"
          />

        </div>
      </section>

      {/* section Portfolio */}
      <section className="block" id="portfolio" aria-labelledby="section Portfolio">
        <Element  name="portfolio" className="block__title">Portfolio</Element>       
        <div className="block__line"></div>
        <div className="gallery" aria-label="Galerie des projets réalisés">
          {projets.map((projet) => (
            <Card
              key={projet.id}
              id={projet.id}
              title={projet.title}
              cover={projet.cover}
              tags={projet.tags}
            />
          ))}
        </div>
      </section>

      {/* section Compétences */}
      <section className="block" id="competences" aria-labelledby="section Compétences">
        <Element  name="competences" className="block__title">Compétences</Element>
        <div className="block__line"></div>
        <p className="block__text" aria-label="Langages de développement">Développement</p>
        <div className="skillsContainer">
          {skillData.filter(skill => skill.type === "1").map(skill => (
            <div key={skill.id} className="skillsContainer__item">
              <img src={require(`../assets/tech/${skill.logo}`)} alt={skill.skill} className="skillsContainer__logo" />
              <p className="skillsContainer__title">{skill.title}</p>
            </div>
          ))}
        </div>
        <div className="block__line"></div>
        <p className="block__text" aria-label="Outils et SEO">Outils et SEO</p>
        <div className="skillsContainer">
          {skillData.filter(skill => skill.type === "2").map(skill => (
            <div key={skill.id} className="skillsContainer__item">
              <img src={require(`../assets/tech/${skill.logo}`)} alt={skill.skill} className="skillsContainer__logo" />
              <p className="skillsContainer__title">{skill.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* section Contact */}
      <section className="block" id="contact" aria-labelledby="Section de contact">
        <Element  name="contact" className="block__title">Vous voulez discuter d'un projet ou juste faire connaissance ?</Element>
        <div className="block__line"></div>
        <ContactForm role="form" aria-describedby="Formulaire de contact"/>
      </section>

    </div>
  )
}

export default Accueil
