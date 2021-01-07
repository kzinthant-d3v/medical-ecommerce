import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import { parseCookies } from '../../utils/cookieParser';
import { useDispatch } from 'react-redux';
import { changeToDark, changeToLight } from '../../redux/modeSlices';
import SwitchMode from '../../components/switch';
import { MainLayout } from '../../components/layouts/MainLayout';

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
  const onFinish = (values): void => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo): void => {
    console.log('Failed:', errorInfo);
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

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

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
