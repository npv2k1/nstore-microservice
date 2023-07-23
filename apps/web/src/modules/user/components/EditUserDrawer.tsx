import { Button, Drawer, Space } from "antd";
import React from "react";
import EditUserForm from "./EditUserForm";

export type EditUserDrawerProps = {
  onClose: () => void;
  open: boolean;
};

const EditUserDrawer = ({ onClose, open }: EditUserDrawerProps) => {
  return (
    <Drawer
      title="Edit user"
      placement={"right"}
      width={500}
      onClose={onClose}
      open={open}
      // extra={}
      footer={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={onClose}>
            OK
          </Button>
        </Space>
      }
    >
      <EditUserForm />
    </Drawer>
  );
};

export default EditUserDrawer;
