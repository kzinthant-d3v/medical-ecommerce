import { AdminLayout } from '../../components/layouts/AdminLayout';
import ManageLayout from '../../components/layouts/ManageLayout';

export default function Home(): JSX.Element {
  return (
    <AdminLayout>
      <ManageLayout>
        <h2>မှတ်တမ်းရေးရာ </h2>
      </ManageLayout>
    </AdminLayout>
  );
}

// Home.getInitialProps = async ({ req }) => {
//   const data = parseCookies(req);

//   return {
//     storedMode: data && data,
//   };
// };
