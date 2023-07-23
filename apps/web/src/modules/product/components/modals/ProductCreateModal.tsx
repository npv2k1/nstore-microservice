import MakeForm, { MakeFormOption } from '@/components/form';
import { useCategoriesQuery, useInsertOneProductMutation } from '@/services/graphql';
import { Form, Modal, ModalProps, Row, message } from 'antd';
import { useMemo } from 'react';

interface CreateUserModalProps extends ModalProps {
  onCancel: () => void;
  onFinish?: () => void;
}

const ProductCreateModal = ({ open, onCancel }: CreateUserModalProps) => {
  const [form] = Form.useForm();
  const [, doInsertOneProduct] = useInsertOneProductMutation();
  const [{ data: categories }] = useCategoriesQuery();

  const productFormOptions: MakeFormOption[] = useMemo(() => {
    const options: MakeFormOption[] = [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'price',
        type: 'number',
      },
      {
        name: 'image',
        type: 'string',
      },
      {
        name: 'categories',
        type: 'multi-select',
        inputOptions: categories?.categories?.docs?.map((category) => ({
          label: category.name,
          value: category._id,
        })),
      },
    ];
    return options;
  }, [categories]);
  const handleForm = async (value: any) => {
    console.log("🚀 ~ file: ProductCreateModal.tsx:38 ~ handleForm ~ value:", value)
    const { data, error } = await doInsertOneProduct({
      data: {
        ...value,
        name: value.name,
        price: Number(value.price),
        categories: value.categories,
        
      },
    });

    if (error) {
      message.error(error.message);
      return;
    }

    message.success('Create product successfully');
    clearForm();
    onCancel();
  };

  const clearForm = ()=>{
    form.resetFields();
  }

  return (
    <Modal
      width={800}
      title={'Create Product'}
      open={open}
      onCancel={onCancel}
      onOk={() => {
        form.submit();
      }}
      destroyOnClose
      footer={null}
      bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}
    >
      <Row className="overflow-y-auto rounded-xl">
        <MakeForm form={form} onFinish={handleForm} options={productFormOptions} />
      </Row>
    </Modal>
  );
};

export default ProductCreateModal;
