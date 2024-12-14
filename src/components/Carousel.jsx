import { useState } from 'react'
import '../styles/carousel.scss'
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";

function Carousel ({ pictures }) {

    /* gestion du défilement */
    const [currentIndex, setCurrentIndex] = useState(0)
    
    function nextImage() {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length)
    }
    function prevImage() {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      )
    }

    return (

        <div className='carousel' role="region" aria-roledescription="carrousel" aria-label="Carrousel d'images">
          <button 
            className={ (pictures.length) > 1 ? "carousel__previousButton--active" : "carousel__previousButton--inactive"} 
            onClick={prevImage} 
            aria-label="Afficher l'image précédente" 
            disabled={pictures.length <= 1}
          >
            <IoChevronBackSharp className="carousel__previousButton--icone" /> {/* chevron précédent */}
          </button>
          <img src={require(`../assets/${pictures[currentIndex]}`)} className="carousel__picture" alt="Carousel - screenshot projet" />
          <p className={ (pictures.length) > 1 ? "carousel__slideIndex--active" : "carousel__slideIndex--inactive"} >{currentIndex+1}/{pictures.length}</p>
          <button className={ (pictures.length) > 1 ? "carousel__nextButton--active" : "carousel__nextButton--inactive"} 
            onClick={nextImage} 
            aria-label="Afficher l'image suivante" 
            disabled={pictures.length <= 1}
          >
            <IoChevronForwardSharp className="carousel__nextButton--icone" /> {/* chevron suivant */}
          </button>
        </div>

    );
}

export default Carousel;
