import { Button, DatePicker, Form, Input, Radio, Rate, Select } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import { BaseOptionType } from 'antd/lib/select';
import { capitalize } from 'lodash';
import React, { useCallback } from 'react';

export type InputType = 'string' | 'number' | 'date' | 'radio' | 'rate' | 'select' | 'multi-select';

export type MakeFormOption = {
  label?: string;
  name: string;
  type: InputType;
  defaultValue?: any;
  inputOptions?: BaseOptionType[];
  required?: boolean;
  renderOptions?: any;
  render?: () => JSX.Element;
};

export type MakeFormProps = {
  options: MakeFormOption[];
  form?: FormInstance;
  onFinish?: (values: any) => void;
  containerClassName?: string;
};

export const MakeForm = ({ options, form, onFinish, containerClassName }: MakeFormProps) => {
  // const [form] = Form.useForm<any>();
  // const onFinish = (values: any) => {
  //   console.log('values', values);
  // };

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
            options={options}
          />
        );

      default:
        return <Input />;
    }
  }, []);

  return (
    <div className={`p-3 w-full ${containerClassName}`}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        {options &&
          options.map((item) => (
            <Form.Item key={item.name} label={item.label ? item.label : capitalize(item.name)} name={item.name}>
              {item.render ? item.render() : MakeInput(item.type, item.inputOptions)}
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

export default MakeForm;
