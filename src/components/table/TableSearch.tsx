import { Form, Input, Select, DatePicker, Button, Space } from 'antd'
import { useForm } from 'antd/es/form/Form'
import type { FC } from 'react'

type Option = {
  label: string
  value: string | number
}

export enum FormType {
  INPUT,
  SELECT,
  DATE
}

export type FormItemConfig<T extends string = string> = {
  type: FormType
  label: string
  prop: T
  options?: Option[]
}

type TableSearchProps<T extends Record<string, any>> = {
  formList: FormItemConfig<Extract<keyof T, string>>[]
  onSearch?: (values: T) => void
}

const TableSearch = <T extends Record<string, any>>({
  formList,
  onSearch
}: TableSearchProps<T>) => {
  const [form] = useForm<T>()

  const renderFormItem = (item: FormItemConfig<Extract<keyof T, string>>) => {
    switch (item.type) {
      case FormType.INPUT:
        return <Input placeholder={`请输入${item.label}`} />

      case FormType.SELECT:
        return (
          <Select
            placeholder={`请选择${item.label}`}
            allowClear
            options={item.options}
          />
        )

      case FormType.DATE:
        return <DatePicker />

      default:
        return null
    }
  }

  const handleSearch = async () => {
    const values = await form.validateFields()
    onSearch?.(values) // values 类型就是 T
  }

  return (
    <Form form={form} layout="inline">
      {formList.map(item => (
        <Form.Item
          key={String(item.prop)}
          label={item.label}
          name={String(item.prop)}
        >
          {renderFormItem(item)}
        </Form.Item>
      ))}

      <Form.Item>
        <Space>
          <Button type="primary" onClick={handleSearch}>
            查询
          </Button>
          <Button onClick={() => form.resetFields()}>重置</Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default TableSearch
