import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { parseCookies } from '../../utils/cookieParser';
import { useDispatch } from 'react-redux';
import { changeToDark, changeToLight } from '../../redux/modeSlices';
import SwitchMode from '../../components/switch';
import { MainLayout } from '../../components/layouts/MainLayout';
import { login } from '../../services/AuthService';
import { useRouter } from 'next/router';

const LoginForm = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-top: 200px;
`;
const Title = styled.p`
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 20px;
`;

export default function Login({ storedMode }: { storedMode: { mode: string } }): JSX.Element {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const router = useRouter();
  useEffect(() => {
    if (storedMode.mode === 'light') {
      dispatch(changeToLight());
    } else if (storedMode.mode === 'dark') {
      dispatch(changeToDark());
    }
  });

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onFinish = async (values): Promise<void> => {
    const user = await login(values.username, values.password);
    if (user.user && user.user.displayName === 'admin') router.push('/admin/home');
    else setError('Email or Password is wrong!');
  };

  const onFinishFailed = (errorInfo): void => {
    console.log(errorInfo);
  };
  return (
    <MainLayout>
      <>
        <SwitchMode currentMode={storedMode.mode} />
        <LoginForm>
          <Title id="title">Admin Panel</Title>

          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            {error && (
              <p style={{ color: 'red', textAlign: 'center', marginLeft: '50px' }}>{error}</p>
            )}
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </LoginForm>
      </>
    </MainLayout>
  );
}

Login.getInitialProps = async ({ req }) => {
  const data = parseCookies(req);

  return {
    storedMode: data && data,
  };
};
