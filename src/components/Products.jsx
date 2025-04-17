import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Fonction fictive pour simuler l'appel API (UTILISE AJAX)
const fetchAllProducts = async () => {
  try {
    const response = await fetch("https://127.0.0.1:8000/api/products"); // Remplacez par l'URL de votre API
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    throw error;
  }
};

export default function Products() {
  const [products, setProducts] = useState([]); // Initialisation avec un tableau vide
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshProducts = () => {
    // Renommée pour plus de clarté
    setLoading(true);
    fetchAllProducts() // Appel AJAX
      .then((data) => {
        console.log("Réponse API complète :", data);
        console.log("Réponse API produits:", data);
        setProducts(data || []);
      })
      .catch((err) => {
        console.error("Erreur fetchAllProducts:", err);
        setError("Erreur lors du chargement des produits.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    refreshProducts(); // Chargement initial (appel AJAX)
    const intervalId = setInterval(refreshProducts, 5000); // Rafraîchissement toutes les 5 secondes (appel AJAX)

    return () => clearInterval(intervalId); // Nettoyage de l'intervalle
  }, []); // Ajout de la dépendance vide pour n'exécuter useEffect qu'une seule fois

  const carouselOptions = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  if (loading) {
    return <p>Chargement...</p>;
  }
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "500px" }}>
          <h6 className="text-primary text-uppercase">Products</h6>
          <h1 className="display-5">Our Fresh &amp; Organic Products</h1>
        </div>

        <OwlCarousel
          className="owl-carousel product-carousel px-5"
          {...carouselOptions}
        >
          {Array.isArray(products) && products.map((p) => ( // Ajout de la vérification ici
            <div className="pb-5" key={p.id}>
              <div className="product-item position-relative bg-white d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}${p.illustration}`} // Correction de l'URL de l'image
                  alt={p.name}
                />
                <h6 className="mb-3">{p.name}</h6>
                <h5 className="text-primary mb-0">{p.price} FCFA</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href="#">
                    <i className="fas fa-cart-plus text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href="#">
                    <i className="fas fa-eye text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}