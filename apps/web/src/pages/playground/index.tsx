import { Button, DatePicker, Form, Input, Radio, Rate, Select } from 'antd';
import { BaseOptionType } from 'antd/lib/select';
import React, { useCallback } from 'react';

export type InputType = 'string' | 'number' | 'date' | 'boolean' | 'object' | 'array';

export type MakeFormOption = {
  label?: string;
  name: string;
  type: any;
  defaultValue?: any;
  selectValues?: BaseOptionType[];
  required?: boolean;
  renderOptions?: any;
  render?: () => JSX.Element;
};

export type MakeFormProps = {
  options: MakeFormOption[];
};

export const MakeForm = ({ options }: MakeFormProps) => {
  const [form] = Form.useForm<any>();
  const onFinish = (values: any) => {
    console.log('values', values);
  };

  const MakeInput = useCallback((type: any, options?: any) => {
    switch (type) {
      case 'string':
        return <Input className="rounded-md" />;
      case 'number':
        return <Input type="number" />;
      case 'date':
        return <DatePicker className="w-full" format={'DD/MM/YYYY'} />;
      case 'radio':
        return <Radio.Group options={options}></Radio.Group>;
      case 'rate':
        return <Rate allowHalf />;
      case 'select':
        return <Select defaultValue="lucy" options={options} />;
      case 'multi-select':
        return (
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={''}
            options={options}
          />
        );

      default:
        return <Input />;
    }
  }, []);

  return (
    <div className="max-w-md bg-gray-200 p-3 ">
      <Form form={form} layout="vertical" onFinish={onFinish}>
        {options &&
          options.map((item) => (
            <Form.Item label={item.label} name={item.name}>
              {MakeInput(item.type)}
            </Form.Item>
          ))}
        <Form.Item>
          <Button
            className="!btn !hover:bg-indigo-600 w-full !bg-indigo-500 !text-white"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const PlayGround = () => {
  const formOptions: MakeFormOption[] = [
    {
      label: 'Fullname',
      name: 'fullName',
      required: true,
      type: 'string',
    },
    {
      label: 'Fullname',
      name: 'price',
      required: true,
      type: 'number',
    },
    {
      label: 'Fullname',
      name: 'date',
      required: true,
      type: 'date',
    },
    {
      label: 'Fullname',
      name: 'male',
      required: true,
      type: 'radio',
    },
    {
      label: 'Fullname',
      name: 'rate',
      required: true,
      type: 'rate',
    },
    {
      label: 'Fullname',
      name: 'select',
      required: true,
      type: 'select',
    },
    {
      label: 'Fullname',
      name: 'select-multi',
      required: true,
      type: 'multi-select',
    },
    {
      label: 'Fullname',
      name: 'colot',
      required: true,
      type: 'color',
    },
  ];
  return (
    <div>
      <MakeForm options={formOptions} />
    </div>
  );
};

export default PlayGround;
