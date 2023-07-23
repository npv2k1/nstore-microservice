import { UploadOutlined } from "@ant-design/icons";
import { Avatar, Button, Upload } from "antd";
import { RcFile } from "antd/lib/upload";
import React from "react";

export type UserAvatarFormProps = {
  file: RcFile;
} & Pick<React.ComponentProps<typeof Upload>, "onChange">;

const UserAvatarForm = ({ file, onChange }: UserAvatarFormProps) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <Avatar
        size={100}
        src={file ? URL.createObjectURL(file) : undefined}
        style={{ cursor: "pointer" }}
      />
      <Upload
        beforeUpload={() => false}
        onChange={onChange}
        multiple={false}
        style={{ display: "none" }}
        maxCount={1}
        showUploadList={false}
      >
        <Button>
          <UploadOutlined /> Upload Image
        </Button>
      </Upload>
    </div>
  );
};

export default UserAvatarForm;
