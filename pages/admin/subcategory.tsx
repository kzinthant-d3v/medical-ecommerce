import { AdminLayout } from '../../components/layouts/AdminLayout';
import ManageLayout from '../../components/layouts/ManageLayout';

export default function SubCategory(): JSX.Element {
  return (
    <AdminLayout>
      <ManageLayout>
        <h1>Subcategory</h1>
      </ManageLayout>
    </AdminLayout>
  );
}
