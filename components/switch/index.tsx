import { Switch } from 'antd';
import { useDispatch } from 'react-redux';
import { changeToDark, changeToLight } from '../../redux/modeSlices';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const SwitchPosition = styled.div`
  position: absolute;
  right: 100px;
  top: 20px;
  display: flex;
  width: 100px;
  justify-content: space-evenly;
  align-items: center;
`;
const Mode = styled.span`
  font-size: 20px;
`;

export default function SwitchMode({ currentMode }: { currentMode: string }): JSX.Element {
  const dispatch = useDispatch();
  const [, setCookie] = useCookies(['mode']);

  const [mode, setMode] = useState(currentMode === 'dark' ? '🌙' : '🌞');

  function onChange(checked): void {
    checked ? dispatch(changeToLight()) : dispatch(changeToDark());
    checked ? setMode('🌞') : setMode('🌙');
    if (checked) {
      setCookie('mode', 'light', {
        path: '/',
        maxAge: 3600,
        sameSite: true,
      });
    } else {
      setCookie('mode', 'dark', {
        path: '/',
        maxAge: 3600,
        sameSite: true,
      });
    }
  }

  return (
    <SwitchPosition>
      <Switch defaultChecked={currentMode === 'light' || !currentMode} onChange={onChange} />
      <Mode>{mode}</Mode>
    </SwitchPosition>
  );
}
