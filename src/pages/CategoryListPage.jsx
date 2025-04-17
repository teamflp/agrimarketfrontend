import React, { useEffect, useState } from "react";
import { fetchAllCategories } from "../services/categoryService";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllCategories()
      .then((data) => {
        setCategories(data["member"] || []);
      })
      .catch((err) => {
        console.error(err);
        setError("Erreur lors du chargement des catégories.");
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
      <h2>Liste des catégories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            {cat.name} (id: {cat.id})
          </li>
        ))}
      </ul>
    </div>
  );
}
