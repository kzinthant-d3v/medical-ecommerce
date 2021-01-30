import { getProducts, createProduct, updateProduct, deleteProduct } from '../../services/Service';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(await getProducts(req.query.id));
    case 'PUT':
      return res.json(
        await updateProduct(
          req.body.name,
          req.body.chemicalName,
          req.body.photo,
          req.body.smallPhoto,
          req.body.pricePerItem,
          req.body.discountPrice,
          req.body.companyId,
          req.body.categories,
          req.body.subcategory,
          req.body.id
        )
      );
    case 'POST':
      return res.json(
        await createProduct(
          req.body.name,
          req.body.chemicalName,
          req.body.photo,
          req.body.smallPhoto,
          req.body.pricePerItem,
          req.body.discountPrice,
          req.body.companyId,
          req.body.categories,
          req.body.subcategory
        )
      );
    case 'DELETE':
      return res.json(await deleteProduct(req.body.id));
    default:
      res.status(405).end('method not allowed');
  }
}
