import React, { useEffect, useState } from "react";

import { useLoginMutation } from "src/services/rest/auth/auth.query";
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  message,
  Row,
} from "antd";

import { setAuthToken } from "src/common/getToken";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import {
  FacebookOutlined,
  GoogleOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { APP_API_URL } from "src/common/configs";
import { getAuthLayout } from "../components/layouts";

const Login = () => {
  const { mutate: doLogin, isLoading } = useLoginMutation();
  const router = useRouter();
  useEffect(() => {
    const { accessToken } = router.query;
    if (accessToken) {
      message.success("Login success.");
      setAuthToken(String(accessToken));
      router.replace("/");
    }
  }, [router.query]);

  const onFinish = async (values: any) => {
    const { email, password } = values;
    doLogin(
      { email, password },
      {
        onSuccess: (data) => {
          message.success("Login success.");
          setAuthToken(data.accessToken);
          router.replace("/");
        },
        onError: (error) => {
          message.error("Login failed.");
        },
      }
    );
  };
  const onFinishFailed = () => {};

  return (
    <div className="flex flex-col items-center justify-center flex-1 pt-5 bg-white">
      <Form
        className="w-full p-5 mt-3 rounded"
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            className="w-full h-10 font-semibold text-white bg-indigo-500 rounded-lg shadow-sm hover:bg-blue-400"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
        <Form.Item>
          <Row>
            {/* <Col span={12}>
              <Button
                type="default"
                className="w-full h-10 font-semibold text-white bg-blue-500 rounded-lg shadow-sm hover:border hover:bg-blue-400 hover:text-white focus:shadow-sm"
                icon={<FacebookOutlined />}
                block
              >
                Login with Facebook
              </Button>
            </Col> */}
            <Col span={24}>
              <Button
                onClick={() => {
                  location.href = `${APP_API_URL}/auth/google`;
                }}
                className="w-full h-10 font-semibold text-white bg-red-500 rounded-lg shadow-sm hover:border hover:bg-red-400 hover:text-white"
                type="default"
                icon={<GoogleOutlined />}
                block
              >
                Login with Google
              </Button>
            </Col>
          </Row>
        </Form.Item>
        <Divider>Or</Divider>
        <Form.Item>
          <button
            className="w-full h-10 font-semibold text-white bg-indigo-500 rounded-lg shadow-sm hover:border"
            onClick={() => router.push("/auth/signup")}
          >
            Register
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

Login.getLayout = getAuthLayout;

export default Login;
