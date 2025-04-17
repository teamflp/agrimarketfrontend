// src/services/productService.js

import axiosInstance from './axiosInstance';

/**
 * Récupère la liste de tous les produits
 * via l'endpoint GET /api/products (API Platform)
 */
export async function fetchAllProducts() {
  const response = await axiosInstance.get('/products');

  console.log('fetchAllProducts: raw response data =', response.data);
  
  // Selon la config par défaut, le JSON sera de type Hydra :
  // On extrait les objets réels depuis data["member"] 
  // Le member est un tableau d'objets représentant des éléments par ex: produits
  const data = response.data;
  const products = data["member"] || [];
  return products;
}

/**
 * Récupère un produit par son ID
 * via GET /api/products/{id}
 */
export async function fetchProductById(productId) {
  const response = await axiosInstance.get(`/products/${productId}`);
  // Dans ce cas, data sera un objet unique représentant le produit
  return response.data;
}

/**
 * Crée un nouveau produit
 * via POST /api/products
 * productData = { name: "Tomates fraiches", price: 2.99, ... }
 */
export async function createProduct(productData) {
  const response = await axiosInstance.post('/products', productData);
  return response.data; // L'objet créé renvoyé par l'API
}

/**
 * Met à jour un produit existant
 * via PUT /api/products/{id}
 * updates = { name: "tomates fraiches", price: 3.50, ... }
 */
export async function updateProduct(productId, updates) {
  const response = await axiosInstance.put(`/products/${productId}`, updates);
  return response.data;
}

/**
 * Supprime un produit existant
 * via DELETE /api/products/{id}
 */
export async function deleteProduct(productId) {
  // Par défaut, API Platform renvoie un code 204 (No Content)
  // donc response.data sera souvent vide.
  const response = await axiosInstance.delete(`/products/${productId}`);
  return response.data; // ou null
}
