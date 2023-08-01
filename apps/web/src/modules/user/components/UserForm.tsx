import { useGetRolesQuery } from "@/services/graphql";
import { Button, DatePicker, Form, FormProps, Input, Select } from "antd";
import React from "react";

export type UserFormProps = {
  submitText: string;
  mode: "create" | "update";
} & FormProps;

const UserForm = ({ form, onFinish, submitText, mode }: UserFormProps) => {
  const [{ fetching, data: listRole }] = useGetRolesQuery();
  const isUpdate = mode === "update";
  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Fullname"
        name="fullName"
        rules={[
          {
            required: true,
            whitespace: true,
          },
        ]}
      >
        <Input className="!form-input !w-full" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
            required: true,
          },
        ]}
      >
        <Input disabled={isUpdate} />
      </Form.Item>
      <Form.Item label="Roles" name="roles">
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder=""
          optionLabelProp="label"
          loading={fetching}
          defaultValue={["user"]}
        >
          {listRole &&
            listRole.Role.map((role) => (
              <Select.Option value={role.name} label={role.name}>
                <div className="">{role.name}</div>
              </Select.Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: isUpdate ? false : true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm password"
        name="password2"
        hasFeedback
        rules={[
          {
            required: isUpdate ? false : true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Select placeholder="select your gender">
          <Select.Option value={true}>Male</Select.Option>
          <Select.Option value={false}>Female</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Phone" name="phone">
        <Input type="phone" />
      </Form.Item>
      <Form.Item label="Address" name="address">
        <Input />
      </Form.Item>
      <Form.Item label="Bio" name="bio">
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item label="DateOfBirth" name="dateOfBirth">
        <DatePicker className="w-full" format={"DD/MM/YYYY"} />
      </Form.Item>
      <Form.Item>
        <Button
          className="!btn !bg-indigo-500 !hover:bg-indigo-600 !text-white w-full"
          type="primary"
          htmlType="submit"
        >
          {submitText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
