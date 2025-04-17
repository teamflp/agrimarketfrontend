// src/pages/ProductDetailPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../services/productService';

export default function ProductDetailPage() {
  const { id } = useParams();   // Récupère l'ID depuis l'URL (ex : /products/:id)
  const navigate = useNavigate(); // Pour naviguer/retourner à la liste si besoin

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error('Erreur lors de la récupération du produit :', err);
        setError('Impossible de charger le produit.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // Pendant le chargement
  if (loading) {
    return (
      <div className="container my-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
          <p className="mt-2">Chargement en cours...</p>
        </div>
      </div>
    );
  }

  // S’il y a eu une erreur
  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  // Si le produit est introuvable (fetchProductById n’a pas trouvé de ressource)
  if (!product) {
    return (
      <div className="container my-5">
        <p>Produit introuvable.</p>
      </div>
    );
  }

  // Affichage normal du produit
  return (
    <div className="container my-5">
      <h1>Détail du produit</h1>
      <div className="card mb-3">
        <div className="card-header">
          <strong>Nom :</strong> {product.name}
        </div>
        <div className="card-body">
          <p><strong>Prix :</strong> {product.price} €</p>
          {/* Vérification si description existe */}
          {product.description ? (
            <p><strong>Description :</strong> {product.description}</p>
          ) : (
            <p className="text-muted">Aucune description</p>
          )}
          {/* Vérification si quantity existe */}
          {product.quantity !== undefined && (
            <p><strong>Quantité :</strong> {product.quantity}</p>
          )}
          {/* Vérification illustration */}
          {product.illustration ? (
            <div>
              <strong>Illustration :</strong>
              <img 
                src={product.illustration}
                alt={product.name}
                style={{ maxWidth: '200px', display: 'block', marginTop: '0.5rem' }}
              />
            </div>
          ) : (
            <p className="text-muted">Aucune illustration</p>
          )}
        </div>
      </div>
      {/* Bouton retour */}
      <button 
        className="btn btn-secondary"
        onClick={() => navigate('/products')}
      >
        ← Revenir à la liste
      </button>
    </div>
  );
}
