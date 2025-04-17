import axiosInstance from './axiosInstance';

export async function fetchAllCategories() {
  const response = await axiosInstance.get('/categories');
  // Selon la config par défaut, le JSON sera de type Hydra : 
  // {
  //   "@context": "/api/contexts/Category",
  //   "@id": "/api/categories",
  //   "@type": "hydra:Collection",
  //   "hydra:member": [ { "id": ..., "name": ... }, ... ],
  //   ...
  // }
  return response.data;
}
