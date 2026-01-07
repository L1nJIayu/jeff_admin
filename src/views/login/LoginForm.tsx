import React, { useState } from 'react'
import { Form, Button, Input } from 'antd'
import type { FormProps } from 'antd'
import { loginApi } from '../../api/modules/admin'
import { useNavigate } from 'react-router'
import ValidateCodeImg from './ValidateCodeImg'
import { useForm } from 'antd/es/form/Form'
import { setToken } from '@utils/auth'

type FieldType = {
  username: string
  password: string
  code: string
}

const LoginForm: React.FC = () => {

  const initialValues: Partial<FieldType> = {
    username: import.meta.env.VITE_LOGIN_USERNAME,
    password: import.meta.env.VITE_LOGIN_PASSWORD
  }

  const [form] = useForm<FieldType>()

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    if(loading) return

    try {
      setLoading(true)
      const res = await loginApi(values)
      if(res.data) {
        const { token } = res.data
        setToken(token)
        navigate('/station-map')
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      initialValues={initialValues}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '用户名不能为空' }]}
      >
        <Input placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '密码不能为空' }]}
      >
        <Input.Password
          placeholder="密码"
          autoComplete="current-password" />
      </Form.Item>
      <Form.Item
        name="code"
        rules={[{ required: true, message: '验证码不能为空' }]}
      >
        <Input placeholder="验证码" suffix={ <ValidateCodeImg /> } />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          block
          htmlType="submit"
          loading={loading}>登录</Button>
      </Form.Item>
    </Form>
  )
}
export default LoginForm