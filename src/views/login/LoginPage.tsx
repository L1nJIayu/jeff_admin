import React, { useState } from 'react'
import { Form, Button, Input } from 'antd'
import type { FormProps } from 'antd'
import { loginApi } from '../../api/modules/admin'
import './login.scss'
import { useNavigate } from 'react-router'

type FieldType = {
  username: string
  password: string
}


const LoginPage: React.FC = () => {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) =>{
    console.log('onFinish', values)
    try {
      setLoading(true)
      const res = await loginApi(values)
      if(res.data) {
        const { token } = res.data
        sessionStorage.setItem('Authorization', token)
        navigate('/home')
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login_page">
      <div className="login_form_wrapper">
        <div className="title">充电桩大数据平台</div>
        <div className="login_form_box">
          <Form
            onFinish={onFinish}
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
              <Input.Password placeholder="密码" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                block
                htmlType="submit"
                loading={loading}>登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
export default LoginPage