import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsListPage from './pages/ProductsListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryListPage from './pages/CategoryListPage';
import NewUser from './pages/NewUser';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsListPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/categories" element={<CategoryListPage />} />
      <Route path="/new-user" element={<NewUser />} />
      
      {/* ... */}
    </Routes>
  );
}
