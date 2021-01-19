import {
  getSubcategory,
  updateSubcategory,
  deleteSubcategory,
  createSubcategory,
} from '../../services/Service';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(await getSubcategory());
    case 'PUT':
      return res.json(await updateSubcategory(req.body.newName, req.body.id));
    case 'POST':
      return res.json(await createSubcategory(req.body.catName));
    case 'DELETE':
      return res.json(await deleteSubcategory(req.body.id));
    default:
      res.status(405).end('method not allowed');
  }
}
