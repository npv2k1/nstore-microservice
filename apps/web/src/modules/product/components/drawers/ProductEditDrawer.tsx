import { Button, Drawer, Form, Space } from 'antd';
import React, { useContext, useEffect } from 'react';
import { ProductModuleCtx } from '../../contexts';
import MakeForm, { MakeFormOption } from '@/components/form';

export type EditUserDrawerProps = {
  onClose: () => void;
  open: boolean;
};

const ProductEditDrawer = ({ onClose, open }: EditUserDrawerProps) => {
  const [form] = Form.useForm();
  const { state, dispatch } = useContext(ProductModuleCtx);
  useEffect(() => {
    if (state.selectedRecord) {
      form.setFieldsValue(state.selectedRecord);
    }
  }, [state.selectedRecord]);

  const productFormOptions: MakeFormOption[] = [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'price',
      type: 'number',
    },
  ];
  const handleForm = async (value: any) => {};

  return (
    <Drawer
      title="Edit product"
      placement={'right'}
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
      {/* <EditUserForm /> */}
      <MakeForm form={form} onFinish={handleForm} options={productFormOptions} />
    </Drawer>
  );
};

export default ProductEditDrawer;
