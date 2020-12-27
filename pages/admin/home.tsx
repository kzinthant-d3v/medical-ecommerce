import AdminLayout from "../../components/layouts/AdminLayout";
import { MainLayout } from "../../components/layouts/MainLayout";
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from "react";
import { parseCookies } from "../../utils/cookieParser";
import { changeToDark, changeToLight } from "../../redux/modeSlices";
import SwitchMode from "../../components/switch";

export default function Home({storedMode}){
  const dispatch = useDispatch();

  useEffect(()=>{
    if(storedMode.mode === 'light'){
      dispatch(changeToLight());
    }else if(storedMode.mode === 'dark'){
      dispatch(changeToDark());
    }else{

    }
  },[]);

  return (
    <MainLayout>
      <AdminLayout>
      <SwitchMode currentMode={storedMode.mode}/>
      <p>Admin Home</p>
      </AdminLayout>
 
      </MainLayout>
  )
}

Home.getInitialProps = async({req}) => {
  const data = parseCookies(req);

  return {
    storedMode: data && data,
  }
}