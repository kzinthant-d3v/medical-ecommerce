import { getCompany, updateCompany, deleteCompany, createCompany } from '../../services/Service';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(await getCompany());
    case 'PUT':
      return res.json(await updateCompany(req.body.newName, req.body.id));
    case 'POST':
      return res.json(await createCompany(req.body.catName));
    case 'DELETE':
      return res.json(await deleteCompany(req.body.id));
    default:
      res.status(405).end('method not allowed');
  }
}
