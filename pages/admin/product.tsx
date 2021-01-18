import { AdminLayout } from '../../components/layouts/AdminLayout';
import ManageLayout from '../../components/layouts/ManageLayout';

export default function Product(): JSX.Element {
  return (
    <AdminLayout>
      <ManageLayout>
        <h2>ပစ္စည်းများ</h2>
      </ManageLayout>
    </AdminLayout>
  );
}
