import { AdminLayout } from '../../components/layouts/AdminLayout';
export default function Home(): JSX.Element {
  return <AdminLayout></AdminLayout>;
}

// Home.getInitialProps = async ({ req }) => {
//   const data = parseCookies(req);

//   return {
//     storedMode: data && data,
//   };
// };
