import { AdminLayout } from '../../components/layouts/AdminLayout';
import ManageLayout from '../../components/layouts/ManageLayout';
export default function Category(): JSX.Element {
  return (
    <AdminLayout>
      <ManageLayout>
        <h1>Category</h1>
      </ManageLayout>
    </AdminLayout>
  );
}
