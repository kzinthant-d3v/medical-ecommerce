import { MainLayout } from './MainLayout';
import { Switch } from 'antd';
import { useDispatch } from 'react-redux';
import { changeToDark, changeToLight } from '../../redux/modeSlices';

export default function AdminLayout({children}){
  const dispatch = useDispatch();

  function onChange(checked) {
    checked ? dispatch(changeToLight()) : dispatch(changeToDark()) ;
  }
  return (
    <MainLayout>
      <Switch defaultChecked onChange={onChange} />
      {children}
      </MainLayout>
  )
}