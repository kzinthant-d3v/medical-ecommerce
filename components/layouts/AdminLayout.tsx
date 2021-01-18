import { MainLayout } from './MainLayout';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { changeToDark, changeToLight } from '../../redux/modeSlices';
import SwitchMode from '../../components/switch';
import Nav from '../../components/Nav';
import Cookies from 'js-cookie';
import firebase from '../../firebase/config';
import { useRouter } from 'next/router';

type AdminLayoutProps = {
  children: JSX.Element;
};
export function AdminLayout({ children }: AdminLayoutProps): JSX.Element {
  const mode = Cookies.get('mode') || 'light';
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (mode === 'light') {
      dispatch(changeToLight());
    } else if (mode === 'dark') {
      dispatch(changeToDark());
    }
    firebase.auth().onAuthStateChanged(function (user) {
      if (!(user && user.displayName === 'admin')) {
        router.push('/');
        setAuth(false);
      } else {
        setAuth(true);
      }
    });
  }, []);

  return (
    <MainLayout>
      {auth && (
        <>
          <SwitchMode currentMode={mode} />
          <div style={{ display: 'flex' }}>
            <Nav />
            {children}
          </div>
        </>
      )}
    </MainLayout>
  );
}
