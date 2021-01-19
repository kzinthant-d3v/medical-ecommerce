import { useQuery } from 'react-query';

const fetchCategory = async () => {
  const parsed = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/categories`);
  const result = await parsed.json();
  return result;
};

const useCategory = () => {
  return useQuery('category', fetchCategory);
};

export { useCategory, fetchCategory };
