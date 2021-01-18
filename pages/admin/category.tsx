import { AdminLayout } from '../../components/layouts/AdminLayout';
import ManageLayout from '../../components/layouts/ManageLayout';
export default function Category(): JSX.Element {
  return (
    <AdminLayout>
      <ManageLayout>
        <h2>အမျိုးအမည်များ</h2>
      </ManageLayout>
    </AdminLayout>
  );
}
