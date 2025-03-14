import pictureAccueil from '../assets/nielsen-ramon-okvqMfl78YE-unsplash.jpg';
import pictureProfile from '../assets/frederic_flipo_2023_n&b.jpg';
import '../styles/main.scss';
import Card from '../components/Card';
import Block from '../components/Block';
import { Element } from "react-scroll";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import skillData from '../datas/skills.json'
import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet-async';

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

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Frederic Flipo",
    "image": "./assets/image_github_ffl.png",
    "description": "Développeur full stack proposant des services de développement et d'optimisation de sites web",
    "@id": "https://frederic-flipo.net",
    "url": "https://frederic-flipo.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "148 rue Georges Clemenceau",
      "addressLocality": "Choisy-au-Bac",
      "postalCode": "60750",
      "addressCountry": "FR"
    },
    "telephone": "+33 7 68 62 94 89",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.43937,
      "longitude": 2.87826
    },
    "openingHours": "Mo-Fr 9:00-18:00"
  };

  return (
    <div className="main">

      <Helmet>
        <html lang="fr" />
        <title>Frédéric FLIPO - Développeur Web Full stack</title>
        <meta name="description" content="Page d'accueil du site de Frederic FLIPO, Développeur Web Full stack." />
        <meta name="keywords" content="accueil, home, page principale" />
        <meta name="author" content="Frederic FLIPO" />
        <meta charset="UTF-8" />
        <meta name="language" content="fr-FR" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="0CpWD0nludtP2a36pEpdceG12jDFnbffZmN6cZ_ZWVk" /> {/* Google Search Console */}
        <meta property="og:title" content="Frederic FLIPO - Développeur Web Full stack" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://github.com/Fred2460/frederic-flipo/blob/main/src/assets/image_github_ffl.png" />
        <meta property="og:url" content="https://frederic-flipo.net" />
        <meta property="og:description" content="Créez de la valeur dans l'écosystème internet" />
        <meta name="twitter:title" content="Frederic FLIPO - Développeur Web Full stack" />
        <meta name="twitter:description" content="Créez de la valeur dans l'écosystème internet" />
        <meta name="twitter:image" content="https://github.com/Fred2460/frederic-flipo/blob/main/src/assets/image_github_ffl.pngg" />
        <meta name="twitter:url" content="https://frederic-flipo.net/" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      </Helmet>

      {/* section Accueil haut de page */}
      <section className="welcome" id="homepage" role="banner" aria-labelledby="Entête Accueil">
        <Element name="homepage"></Element>
        <span className="welcome__block1"></span>
        <span className="welcome__block2"></span>
        <img className="welcome__pictureAccueil" src={pictureAccueil} alt="Bureau clavier et plantes dans un globe de verre" aria-label="Accueil - Image d'un bureau avec un clavier et des plantes dans un globe de verre" />
        <div className="welcome__container">
          <h1 className="welcome__container--banner">Créez de la valeur dans l'écosystème internet</h1>
          <div className="welcome__container__ident">
            <img className="welcome__container__ident--pictureProfile" src={pictureProfile} alt="Profile" aria-label="Photo de profile Frederic Flipo" />
            <div className="welcome__container__ident--sub">
              <h2 className="welcome__container__ident--sub--texth2">Frédéric FLIPO</h2>  
              <h3 className="welcome__container__ident--sub--texth3">Développeur Web</h3>
            </div>
          </div>
          <div className="welcome__container--slogan">
            <h2>Développer les outils web pour accélérer votre visibilité et vos activités en ligne.</h2>
          </div>
        </div>

      </section>

      {/* section Services */}
      <section className="block" id="services" aria-labelledby="section Services">
        <Element  name="services" className="block__title">Services</Element>          
        <div className="block__line"></div>
        <p className="block__text" aria-label="Explications Services">
          Mettre à profit mon expérience professionnelle dans l’industrie et les services pour proposer des solutions
           adaptées.<br />Aider mes clients à se développer selon leurs besoins dans l’écosystème internet.<br />
          <br />
          Développement web - Frontend | Backend | Bases de données | SEO | Accessibilité<br />
          Missions sous contrat ou freelance | Sous-traitance
        </p>
        <div className="services">
          <Block
            title="Augmentez votre visibilité"
            tech="Front-end"
            icone={<MdOutlineScreenSearchDesktop aria-label="Icône représentant la visibilité sur internet" />}
            text1="Vous souhaitez attirer plus de clients, vous rendre visible sur internet? La solution est simple: créez votre propre site vitrine." 
            text2="Intégrez les technologies récentes et favorisez la conception Responsive&nbsp;!"
          />

          <Block 
            title="Ajoutez des services à votre site web"
            tech="Back-end"
            icone={<FaUserGear aria-label="Icône représentant un processus utilisateur" />}
            text1="Vous souhaitez fidéliser vos prospects et clients, donner à votre entreprise une image professionnelle?" 
            text2="Ajoutez des fonctionnalités intelligentes&nbsp;!"
          />

          <Block 
            title="Augmentez votre trafic"
            tech="SEO"
            icone={<MdVisibility aria-label="Icône représentant la visibilité par un oeil" />}
            text1="Améliorez le référencement naturel de votre site, sa performance, optimisez son contenu, intégrez le référencement local." 
            text2="Devenez visible sur les moteurs de recherche&nbsp;!"
          />

          <Block 
            title="Améliorez l'expérience des utilisateurs locaux"
            tech="SEO local"
            icone={<BsGeoAltFill aria-label="Icône représentant la position sur une carte" />}
            text1="Optimisez votre visibilité locale avec Google Business Profile (anc. Google My Business), intégrez vos microdonnées et structurez les."
            text2="Soyez facile à trouver dans votre zone géographique&nbsp;!"
          />

          <Block
            title="Soyez plus inclusifs"
            tech="Accessibilité"
            icone={<MdOutlineAccessibleForward aria-label="Icône représentant l'accessibilité" />}
            text1="Rendez votre site web utilisable par le plus grand nombre, y compris les personnes ayant des handicaps."
            text2="Aidez-les à Percevoir, Comprendre, Naviguer et Interagir de manière efficace&nbsp;!"
          />

          <Block 
            title="Vous manquez de ressources?"
            tech="Appelez un freelance"
            icone={<SiFreelancer aria-label="Icône représentant la flexibilité" />}
            text1="Pour mettre en oeuvre vos projets, il vous manque des compétences ou simplement des ressources. Renforcez votre équipe selon vos besoins."
            text2="Gagnez en rapidité et en flexibilité&nbsp;!"
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
              <img src={require(`../assets/tech/${skill.logo}`)} alt={skill.title} className="skillsContainer__logo" />
              <p className="skillsContainer__title">{skill.title}</p>
            </div>
          ))}
        </div>
        <div className="block__line"></div>
        <p className="block__text" aria-label="Outils et SEO">Outils et SEO</p>
        <div className="skillsContainer">
          {skillData.filter(skill => skill.type === "2").map(skill => (
            <div key={skill.id} className="skillsContainer__item">
              <img src={require(`../assets/tech/${skill.logo}`)} alt={skill.title} className="skillsContainer__logo" />
              <p className="skillsContainer__title">{skill.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* section Contact */}
      <section className="block" id="contact" aria-labelledby="Section de contact">
        <Element  name="contact" className="block__title">Vous avez une question ou un projet&nbsp;?</Element>
        <div className="block__line"></div>
        <ContactForm role="form" aria-describedby="Formulaire de contact"/>
      </section>

    </div>
  )
}

export default Accueil
