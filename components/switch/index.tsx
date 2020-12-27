
import { Switch } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { changeToDark, changeToLight } from '../../redux/modeSlices';
import styled from 'styled-components';
import React,{ useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';


const SwitchPosition = styled.div`
    position: absolute;
    right:100px;
    top: 20px;
    display:flex;
    width: 100px;
    justify-content: space-evenly;
    align-items: center;
`;
const Mode = styled.span`
font-size: 20px;
`;


export default function SwitchMode({currentMode}){

  const dispatch = useDispatch();
  const [_, setCookie] = useCookies(["mode"]);
  
  const [mode, setMode ] = useState(currentMode === 'light' ? '🌞': '🌙');


  function onChange(checked) {
    checked ? dispatch(changeToLight()) : dispatch(changeToDark()) ;
    checked ? setMode('🌞') : setMode('🌙');
    if(checked){
      setCookie("mode","light",{
        path:"/",
        maxAge:3600,
        sameSite: true
      })
    }else{
      setCookie("mode","dark",{
        path:"/",
        maxAge:3600,
        sameSite: true
      })
    }
  }


    return (      
      <SwitchPosition>
        <Switch defaultChecked={currentMode === 'light'} onChange={onChange} />
        <Mode>{mode}</Mode>
      </SwitchPosition>
      )

}