import { Link } from 'react-router-dom'
import '../styles/main.scss';
import { Helmet } from 'react-helmet-async';


function Error() {

  <Helmet>
    <html lang="fr" />
    <title>Erreur 404 | Frédéric FLIPO - Développeur Web Compiègne</title>
    <meta name="description" content="La page que vous recherchez n'a pas pu être trouvée sur le site www.frederic-flipo.net. Veuillez vérifier l'URL ou utiliser la barre de recherche." />
    <meta name="author" content="Frederic FLIPO" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <meta name="language" content="fr-FR" />
    <meta name="robots" content="noindex, nofollow" />
    <meta http-equiv="content-language" content="fr" />
  </Helmet>

  return (
    <div className="main errorMain" role="region" aria-labelledby="Page d'erreur 404">
      <h1 className="errorMain__H1">404</h1>
      <h2 className="errorMain__H2">Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="errorMain__Link" aria-label="Lien retour page d'accueil" to="/">Retournez sur la page d'accueil</Link>
    </div>
  )
}

export default Error
