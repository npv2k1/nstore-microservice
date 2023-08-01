import React, { useContext, useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Avatar,
  Upload,
  UploadProps,
  message,
  Select,
} from "antd";
import { RcFile, UploadChangeParam, UploadFile } from "antd/lib/upload";
import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  useFindDetailUserQuery,
  useGetRolesQuery,
  User,
  useUpdateUserMutation,
} from "@/services/graphql";
import { APP_API_URL } from "src/common/configs";
import { UserPageCtx } from "../store";
import { getBase64 } from "src/utils/tool";
import UserForm from "./UserForm";
import UserAvatarForm from "./UserAvatarForm";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};

const EditProfileForm = () => {
  const [form] = Form.useForm<User>();
  const { state, dispatch } = useContext(UserPageCtx);
  const [, doUpdateUser] = useUpdateUserMutation();
  const [file, setFile] = useState<any>(null);
  const [detailUser, setDetailUser] = useState<User>();

  const [{ data: user }] = useFindDetailUserQuery({
    variables: {
      id: state.selectedRecord?.id || 0,
    },
    pause: !state.selectedRecord,
  });
  useEffect(() => {
    if (!user) return;

    form.setFieldsValue({
      ...user.User_by_pk,
    });
    setDetailUser(user.User_by_pk);
    return () => {
      form.resetFields();
    };
  }, [user]);

  const onFinish = async (values: User) => {
    if (!detailUser) return;

    let update: any = {};
    let k: keyof typeof values; // Type is "one" | "two" | "three"
    for (k in values) {
      const v = values[k]; // OK
      if (JSON.stringify(v) !== JSON.stringify(detailUser[k])) {
        update[k] = v;
      }
    }
    console.log("🚀 ~ file: EditUserForm.tsx:71 ~ onFinish ~ update", update);

    const res = await doUpdateUser({
      where: {
        id: state.selectedRecord?.id || 0,
      },
      data: {
        ...update,
      },
    });
    if (res.data) {
      message.success("Cập nhật thành công");
    }
  };

  const handleFileChange = (info: UploadChangeParam<UploadFile<any>>) => {
    setFile(info.file);
  };
  return (
    <div>
      <div className="flex flex-row space-x-3 items-center mb-3">
        <div className="flex flex-col items-center space-y-3">
          <UserAvatarForm file={file} onChange={handleFileChange} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-3xl">{"hello"}</h3>
          <p>{"a@gmail.com"}</p>
        </div>
      </div>
      <UserForm
        mode="update"
        form={form}
        onFinish={onFinish}
        submitText="Edit user"
      />
    </div>
  );
};

export default EditProfileForm;
