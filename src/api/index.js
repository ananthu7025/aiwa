// api.js

import axios from 'axios';

const API_BASE_URL = 'https://api-prxi.onrender.com';

export const fetchProductsBySubcategory = async (subcategoryId) => {
  try {
    
    const response = await axios.get(`${API_BASE_URL}/products/subcategory/${subcategoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};


export const fetchMainCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/main_categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching main categories:', error);
    throw error;
  }
};
export const fetchSubCatById = async (subcategoryId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sub_categories/${subcategoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching main categories:', error);
    throw error;
  }
};
export const fetchSubcategoriesByMainCategory = async (mainCategoryId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sub_categories/${mainCategoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching subcategories:', error);
    throw error;
  }
};
export const fetchAllSub = async (subcategoryId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sub_categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching main categories:', error);
    throw error;
  }
};
export const submitCartDetails = async (payload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cart/submit`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Error submitting cart details:', error);
    throw error;
  }
};
