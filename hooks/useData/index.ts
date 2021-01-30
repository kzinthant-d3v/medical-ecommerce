import { useQuery } from 'react-query';

const fetchCategory = async () => {
  const parsed = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/categories`);
  const result = await parsed.json();
  return result;
};

const useCategory = () => {
  return useQuery('category', fetchCategory);
};
const fetchCompany = async () => {
  const parsed = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/companies`);
  const result = await parsed.json();
  return result;
};

const useCompany = () => {
  return useQuery('company', fetchCompany);
};

const fetchSubcategory = async () => {
  const parsed = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/subcategories`);
  const result = await parsed.json();
  return result;
};

const useSubcategory = () => {
  return useQuery('subcategory', fetchSubcategory);
};

const fetchProducts = async () => {
  const parsed = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/products`);
  const result = await parsed.json();
  return result;
};

const useProducts = () => {
  return useQuery('product', fetchProducts);
};
export {
  fetchProducts,
  useProducts,
  useCategory,
  fetchCategory,
  useCompany,
  fetchCompany,
  useSubcategory,
  fetchSubcategory,
};
