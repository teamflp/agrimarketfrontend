import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    
    <>
      {/* 1) On définit une variable pour le logo */}


      {/* 1) TOPBAR : bande blanche qui défile normalement */}
      <div className="container-fluid px-5 d-none d-lg-block">
        <div className="row gx-5 py-3 align-items-center">
          {/* Téléphone à gauche */}
          <div className="col-lg-3">
            <div className="d-flex align-items-center justify-content-start">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-2"></i>
              <h2 className="mb-0">+225 134 567 895</h2>
            </div>
          </div>
          {/* Logo au centre */}
          <div className="col-lg-6">
            <div className="d-flex align-items-center justify-content-center">
              <a href="index.html" className="navbar-brand ms-lg-5">
                <h1 className="m-0 display-4 text-primary">
                  <span className="text-secondary">AGRI</span>MARKET
                </h1>
              </a>
            </div>
          </div>
          {/* Icônes réseaux sociaux à droite */}
          <div className="col-lg-3">
            <div className="d-flex align-items-center justify-content-end">
              <a className="btn btn-primary btn-square rounded-circle me-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-primary btn-square rounded-circle me-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-primary btn-square rounded-circle me-2" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-primary btn-square rounded-circle" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* FIN TOPBAR */}

      {/* 2) NAVBAR : bande verte avec sticky-top */}
      <nav className="agri-nav navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5 sticky-top">
        {/* Logo mobile seulement */}
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand d-flex d-lg-none">
            <img src="./agrimarket.svg" className="img-fluid" alt="logo Agri Market" style={{ width: '30%' }}/>
          </Link>

          <Link to="/" className="navbar-brand d-none d-lg-flex">
            <Link to="/" className="navbar-brand">
              <img src="./agrimarket.svg" className="img-fluid" alt="logo Agri Market" style={{ width: '25%' }}/>
            </Link>
          </Link>

          {/* Bouton burger */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"  >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
       

        {/* Liens de navigation */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            <Link to="/" className="nav-item nav-link active">Accueil</Link>
            <Link to="/about" className="nav-item nav-link">A propos</Link>
            <Link to="/products" className="nav-item nav-link">Produits</Link>
            <Link to="/categories" className="nav-item nav-link">Catégories</Link>
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Nos Services</Link>
              <div className="dropdown-menu m-0">
                <Link to="/service" className="dropdown-item">Services</Link>
                <Link to="/service-detail" className="dropdown-item">Service Detail</Link>
                <Link to="/cart" className="dropdown-item">Panier</Link>
                <Link to="/detail" className="dropdown-item">Blog Detail</Link>
                <Link to="/checkout" className="dropdown-item">Checkout</Link>
                <Link to="/contact" className="dropdown-item">Contact</Link>
                <Link to="/faq" className="dropdown-item">FAQ</Link>
              </div>
            </div> 
            <Link to="/users-user" className="nav-item nav-link">Inscription</Link>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
        </div>
      </nav>
      {/* FIN NAVBAR */}
    </>
  );
}
