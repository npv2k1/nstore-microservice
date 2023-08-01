import {
  EditOutlined,
  FacebookOutlined,
  GoogleOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Checkbox, Col, Divider, Form, Input, message, Row } from 'antd';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useLoginMutation, useSignupMutation } from 'src/services/rest/auth/auth.query';
import { getAuthLayout } from '../components/layouts';

const SignUpPage = () => {
  const { mutate: doLogin } = useSignupMutation();
  const router = useRouter();

  const onFinish = async (values: any) => {
    const { email, password, firstname, lastname } = values;
    const router = useRouter();
    doLogin(
      { email, password, firstname, lastname },
      {
        onSuccess: (dt) => {
          Cookies.set('token', dt.accessToken);
          Cookies.set('refreshToken', dt.refreshToken);
          message.success('Signup success');
          router.push('/auth/login');
        },
        onError: (err) => {
          message.error(err.message);
        },
      },
    );
  };
  
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Form
        layout="vertical"
        className="mt-3 w-full rounded p-5"
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Fullname"
          name="fullname"
          rules={[
            {
              required: true,
              message: 'Please input your fullname!',
            },
          ]}
        >
          <Input prefix={<EditOutlined className="site-form-item-icon" />} placeholder="Fullname" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            className="h-10 w-full rounded-lg bg-indigo-500 font-semibold text-white shadow-sm hover:bg-blue-400"
            type="primary"
            htmlType="submit"
          >
            Signup
          </Button>
        </Form.Item>

        <Divider>Or</Divider>
        <Form.Item>
          <Button
            className="h-10 w-full rounded-lg bg-indigo-500 font-semibold text-white shadow-sm hover:border"
            onClick={() => router.push('/auth/login')}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
SignUpPage.getLayout = getAuthLayout;
export default SignUpPage;
