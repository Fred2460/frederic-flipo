import '../styles/fprojet.scss'
import Error from './Erreur'
import projetsData from '../datas/projets.json'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'

function FProjet() {
  /* récupération de l'id et des informations du projet sélectionné */
  const { id } = useParams()
  const projet = projetsData.find((projet) => projet.id === id)

  /* gestion du cas où le projet de l'id sélectionné n'existe pas */
  if (!projet) {
    return (
      <div role="alert" aria-live="off">
        <Error />
      </div>
    )
  }

  return (
    <div className='info'>

      {/* Carrousel de photos */}
      <div className="blockCarousel">
        <Carousel pictures={projet.pictures} />
      </div>

      {/* informations principales du projet */}
      <div className="infoBlock" role="region" aria-labelledby="Informations du projet">
        <div className='identification'> 
          <h1 className='identification__title' aria-label={`Titre du projet : ${projet.description}`}>{projet.description}</h1>
          <p className='identification__theme' aria-label={`Thème du projet : ${projet.theme}`}>{projet.theme}</p>
          <div className='identification__tags' aria-label="Tags du projet"> {/* tags du projet */}
            {projet.tags.map((tag, index) => (
              <p key={index} className={tag !== undefined ? 'identification__tags--tag' : ''}>
                {tag}
              </p>
            ))}
          </div>
          <a href={projet.lien.startsWith('http') ? projet.lien : `https://${projet.lien}`} className='identification__lien' target="_blank" rel="noopener noreferrer" aria-label="Lien vers projet">
            {projet.lien}
          </a>
        </div>
      </div>

      {/* informations détaillées du projet */}
      <div className="details" role="region" aria-labelledby="Détails du projet">
          <article  className="details__block">
            <Collapse title="Détails de la mise en oeuvre">
              <span>
                {projet.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </span>
            </Collapse>
          </article>
      </div>
    </div>
  )
}

export default FProjet
  