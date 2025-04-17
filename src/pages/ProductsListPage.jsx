import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../services/productService";

export default function ProductsListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllProducts()
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
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h2>Liste des produits</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Catégorie</th>
            <th>Illustration</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price} $</td>
              <td>{p.quantity}</td>
              <td>{p.category ? p.category['@id'] : 'Non définie'}</td>
              <td>
                {p.illustration ? ( <img className="img-fluid mb-4" src={`${import.meta.env.VITE_IMAGE_BASE_URL}${p.illustration}`} alt={p.name} style={{width: '10%'}}  />) : (
                  "Pas d'illustration"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}