import { getCategory } from '../../services/Service';

export default async function handler(req, res) {
  const result = await getCategory();

  res.json(result);
}
