import { MainLayout } from './MainLayout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { changeToDark, changeToLight } from '../../redux/modeSlices';
import SwitchMode from '../../components/switch';
import Nav from '../../components/Nav';
import Cookies from 'js-cookie';

type AdminLayoutProps = {
  children: JSX.Element;
};
export function AdminLayout({ children }: AdminLayoutProps): JSX.Element {
  const mode = Cookies.get('mode') || 'light';
  const dispatch = useDispatch();

  useEffect(() => {
    if (mode === 'light') {
      dispatch(changeToLight());
    } else if (mode === 'dark') {
      dispatch(changeToDark());
    }
  });

  return (
    <MainLayout>
      <>
        <SwitchMode currentMode={mode} />
        <div style={{ display: 'flex' }}>
          <Nav />
          {children}
        </div>
      </>
    </MainLayout>
  );
}
