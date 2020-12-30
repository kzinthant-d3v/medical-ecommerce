import { MainLayout } from './MainLayout';

type Props = {
  children: JSX.Element;
};
export default function AdminLayout({ children }: Props): JSX.Element {
  return <MainLayout>{children}</MainLayout>;
}
