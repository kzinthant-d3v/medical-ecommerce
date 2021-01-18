import { AdminLayout } from '../../components/layouts/AdminLayout';
import ManageLayout from '../../components/layouts/ManageLayout';

export default function SubCategory(): JSX.Element {
  return (
    <AdminLayout>
      <ManageLayout>
        <h2>တစ်ခုခြင်း အမျိုးအစားများ</h2>
      </ManageLayout>
    </AdminLayout>
  );
}
