import { AdminLayout } from '../../components/layouts/AdminLayout';
import ManageLayout from '../../components/layouts/ManageLayout';

export default function Product(): JSX.Element {
  return (
    <AdminLayout>
      <ManageLayout>
        <h1>Product</h1>
      </ManageLayout>
    </AdminLayout>
  );
}
