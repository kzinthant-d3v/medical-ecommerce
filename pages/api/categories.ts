import {
  getCategory,
  updateCategory,
  deleteCategory,
  createCategory,
} from '../../services/Service';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(await getCategory());
    case 'PUT':
      return res.json(await updateCategory(req.body.newName, req.body.id));
    case 'POST':
      return res.json(await createCategory(req.body.catName));
    case 'DELETE':
      return res.json(await deleteCategory(req.body.id));
    default:
      res.status(405).end('method not allowed');
  }
}
