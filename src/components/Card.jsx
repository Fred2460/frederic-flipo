import PropTypes from "prop-types"
import "../styles/main.scss"

function HandleClick(id) {
  window.location.href=`/FProjet/${id}`
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
  
}

function Card({ id = "", title = "", cover = "", tags }) {

  return (
    <div className="gallery__card" onClick={() => HandleClick(id)}>
      <div className="gallery__card__content">
        <p className="gallery__card__content--title">{title}</p>
        <img src={require(`../assets/${cover}`)} alt="Aperçu du projet" className="gallery__card__content--cover" />
        <ul className="gallery__card__content--taglist">
          {(tags && tags.length >0) ? (
            tags.map((tag, index) => (
            <li key={index} className={tag !== undefined ? 'gallery__card__content--tags' : ''}>
              {tag}
            </li>))
            ) : (
              <li></li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Card
