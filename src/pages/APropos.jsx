import '../styles/main.scss'
import Collapse from '../components/Collapse'
import { HiArrowNarrowRight } from "react-icons/hi"
import { PiArrowCircleRightFill } from "react-icons/pi"
import { Helmet } from 'react-helmet-async';

function APropos() {

  const siteUrl = 'https://www.frederic-flipo.net';
  const imageUrl = `${siteUrl}/src/assets/image_github_ffl.png`;

  return (
    <div className="main">
      
      <Helmet>
        <html lang="fr" />
        <title>A propos | Frédéric FLIPO - Développeur Web Compiègne</title>
        <meta name="description" content="Frederic FLIPO, Développeur Web Full stack à Compiègne. Freelance, je développe vos sites web avec WordPress ou autres CMS. J'apporte aussi mes expertises aux entreprises" />
        <meta name="keywords" content="développement web, seo, wordpress, compiègne, internet, freelance" />
        <meta name="author" content="Frederic FLIPO" />
        <meta charset="UTF-8" />
        <link rel="canonical" href="https://www.frederic-flipo.net/apropos/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="language" content="fr-FR" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="content-language" content="fr" /> 
        <meta name="google-site-verification" content="0CpWD0nludtP2a36pEpdceG12jDFnbffZmN6cZ_ZWVk" /> {/* Google Search Console */}
        <meta property="og:title" content="A propos | Frédéric FLIPO - Développeur Web Compiègne" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:description" content="Frederic FLIPO, Développeur Web à Compiègne. Freelance, je développe vos sites web avec WordPress ou autres CMS. J'apporte aussi mes expertises aux entreprises" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:title" content="A propos | Frédéric FLIPO - Développeur Web Compiègne" />
        <meta name="twitter:description" content="Frederic FLIPO, Développeur Web à Compiègne. Freelance, je développe vos sites web avec WordPress ou autres CMS. J'apporte aussi mes expertises aux entreprises" />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:url" content={siteUrl} />
      </Helmet>

      <div className="apropos" role="region" aria-labelledby="Présentation des expériences hors développement">
        <h1 className="block__title--h1">Présentation</h1>
        <h2 className="block__title--h2">30 ans d’expérience dans l’industrie et les services</h2>
      </div>

      <div className="experiences" aria-label="Avantages de mon expérience hors développement">
        <p className="block__text">
          Au delà de mes compétences de développement Web, par mon expérience des entreprises, je peux vous apporter une bonne compréhension de vos clients:<br/><br/>
          <PiArrowCircleRightFill /> Parler le même langage que vos prospects et clients<br/>
          <PiArrowCircleRightFill /> Comprendre rapidement leurs organisations et contraintes<br/>
          <PiArrowCircleRightFill /> Adapter le déroulement des projets à leurs besoins et mode de décision
        </p>
        <article aria-label="Compétences Excellence Opérationnelle">
          <Collapse title="Excellence Opérationnelle">
            <span>Un peu comme une synthèse de mes autres expériences professionnelles, j'ai contribué à <strong>déployer une démarche 
              d'Excellence Opérationnelle</strong> sur 6 usines à tous les niveaux de l'entreprise et avec l'ensemble des salariés:<br />
              <HiArrowNarrowRight /> Ancrer une <strong>démarche d'amélioration continue</strong> auprès de l'ensemble des salariés,<br />
              <HiArrowNarrowRight /> Multiplier le <strong>travail en équipes pluridisciplinaires</strong>,<br />
              <HiArrowNarrowRight /> Utiliser des méthodes de résolution de problèmes,<br />
              <HiArrowNarrowRight /> Renforcer et systématiser la communication,<br />
              <HiArrowNarrowRight /> Déployer les <strong>méthodes LEAN</strong> (5S, Kaizen, kanban, Value Stream Management, ...).</span>
          </Collapse>
        </article>

        <article aria-label="Compétences relation clients en B2B">
          <Collapse title="Relation clients en B2B">
            <span>Mes responsabilités opérationnelles m'ont amené à <strong>gérer les relations clients professionnels en direct</strong> dans différentes positions:<br/>
            <strong> <HiArrowNarrowRight /> Responsable Avant-Vente</strong> pour construire, chiffrer et négocier des propositions commerciales de services;<br/>
            <strong> <HiArrowNarrowRight /> Gestionnaire d'Affaire</strong> pour exécuter les contrats selon les spécificités, fournir le reporting, proposer des solutions d'amélioration, facturer les prestations;</span>
          </Collapse>
        </article>

        <article aria-label="Compétences management d'équipes">
          <Collapse title="Management d'équipes">
            <span>Mon expérience m'a permis d'assurer des fonctions de management d'équipes importantes de production, de direction
              de site industriels ainsi que de <strong>gestion de projets</strong>.</span>
          </Collapse>
        </article>

        <article aria-label="Expérience dans les secteurs d'activité">
          <Collapse title="Secteurs d'activité">
            <span>Ingénieur expérimenté dans le secteur de <strong>l'industrie de production</strong> grandes et moyennes séries (cosmétique, automobile, plasturgie) 
              et les secteurs des <strong>services aux opérateurs de Télécom</strong>.</span>
          </Collapse>
        </article>

      </div>
    </div>
  )
}

export default APropos
