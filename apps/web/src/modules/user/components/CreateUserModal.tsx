import {
  Col,
  Form,
  Modal,
  ModalProps,
  Row,
  message
} from "antd";
import { UploadChangeParam, UploadFile } from "antd/lib/upload";
import { useState } from "react";
import { APP_API_URL } from "src/common/configs";
import UserAvatarForm from "./UserAvatarForm";
import UserForm from "./UserForm";
import { User, useCreateUserMutation } from "@/services/graphql";

interface CreateUserModalProps extends ModalProps {
  onCancel: () => void;
  onFinish?: () => void;
}

const CreateUserModal = ({ open, onCancel }: CreateUserModalProps) => {
  const [form] = Form.useForm<
    User & {
      avatar: any;
    }
  >();
  const [, doCreateUser] = useCreateUserMutation();

  const handleForm = async (value: User) => {
    // upload file
    let dataUpload: any = {};
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const resUpload = await fetch(`${APP_API_URL}/uploads/file`, {
        method: "POST",
        body: formData,
      });
      dataUpload = await resUpload.json();
    }

    const res = await doCreateUser({
      data: {
        email: value.email,
        fullName: value.fullName || "",
        password: value.password,
        gender: value.gender,
        bio: value.bio,
        avatarFileId: dataUpload && dataUpload.id,
      },
    });
    if (res.data?.insertOneUser.id) {
      message.success("User created");
    } else {
      message.error(res.error?.message);
    }
  };
  const [file, setFile] = useState<any>(null);

  const handleFileChange = (info: UploadChangeParam<UploadFile<any>>) => {
    setFile(info.file);
  };
  return (
    <Modal
      width={800}
      title={"Create User"}
      open={open}
      onCancel={onCancel}
      onOk={() => {
        form.submit();
      }}
      destroyOnClose
      footer={null}
      bodyStyle={{ overflowY: "auto", maxHeight: "calc(100vh - 200px)" }}
    >
      <Row className="rounded-xl overflow-y-auto">
        <Col span={16}>
          <UserForm
            mode="create"
            form={form}
            onFinish={handleForm}
            submitText="Create user"
          />
        </Col>
        <Col
          span={8}
          className="pt-5"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <UserAvatarForm file={file} onChange={handleFileChange} />
        </Col>
      </Row>
    </Modal>
  );
};

export default CreateUserModal;
