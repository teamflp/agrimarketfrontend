import React from "react";
// Owl Carousel et ses styles
import OwlCarousel from "react-owl-carousel"; 
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Import de votre image de témoignage
import testimonial2 from "../assets/img/testimonial-2.jpg";

export default function Testimonial() {
  
  // Options de configuration du carrousel
  const carouselOptions = {
    loop: true,
    margin: 30,
    nav: true,               // Affiche les flèches Next/Prev
    dots: false,             // Cache la pagination par points
    autoplay: true,          // Défilement automatique
    autoplayTimeout: 4000,   // Délai (en ms) entre deux slides
    smartSpeed: 1000,        // Vitesse de transition
    navText: [
      // Icônes ou texte pour les flèches de navigation
      '<i class="bi bi-arrow-left text-white fs-3"></i>',
      '<i class="bi bi-arrow-right text-white fs-3"></i>'
    ],
    // Responsivité
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  };

  return (
    // Conteneur principal avec fond personnalisé
    <div className="container-fluid bg-testimonial py-5 my-5">
      {/* Conteneur interne Bootstrap */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            
            {/* Carrousel OwlCarousel */}
            <OwlCarousel
              className="owl-carousel testimonial-carousel p-5"
              {...carouselOptions}
            >
              {/* Témoignage n°1 */}
              <div className="testimonial-item text-center text-white">
                <img
                  className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4"
                  src={testimonial2}
                  alt="Client testimonial"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <p className="fs-5">
                  Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. 
                  At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.
                </p>
                <hr className="mx-auto w-25" />
                <h4 className="text-white mb-0">Client Name</h4>
              </div>

              {/* Témoignage n°2 */}
              <div className="testimonial-item text-center text-white">
                <img
                  className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4"
                  src={testimonial2}
                  alt="Client testimonial"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <p className="fs-5">
                  Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. 
                  At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.
                </p>
                <hr className="mx-auto w-25" />
                <h4 className="text-white mb-0">Client Name</h4>
              </div>
            </OwlCarousel>
            {/* Fin du carrousel */}
            
          </div>
        </div>
      </div>
    </div>
  );
}
