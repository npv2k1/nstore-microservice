import MakeForm, { MakeFormOption } from '@/components/form';
import { useInsertOneCategoryMutation, useInsertOneProductMutation } from '@/services/graphql';
import { Form, Modal, ModalProps, Row, message } from 'antd';

interface CreateUserModalProps extends ModalProps {
  onCancel: () => void;
  onFinish?: () => void;
}

const CategoryCreateModal = ({ open, onCancel }: CreateUserModalProps) => {
  const [form] = Form.useForm();
  const [, doInsertOneCategory] = useInsertOneCategoryMutation();

  const productFormOptions: MakeFormOption[] = [
    {
      name: 'name',
      type: 'string',
    },
  ];
  const handleForm = async (value: any) => {
    const { data, error } = await doInsertOneCategory({
      data: {
        ...value,
      },
    });

    if (error) {
      message.error(error.message);
      return;
    }

    message.success('Create product successfully');
    onCancel();
  };
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

export default CategoryCreateModal;
