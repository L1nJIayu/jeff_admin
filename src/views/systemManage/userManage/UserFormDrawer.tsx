import { Drawer, Form, Input } from 'antd'

type Props = {
  open: boolean
  id?: number

  onClose: () => void
}

type FieldType = {
  username: string
  password: string
  name: string
}

const UserFormDrawer = (props: Props) => {

  const { id, open, onClose } = props

  const title = id ? '修改用户信息' : '添加用户'

  return (
    <Drawer
      title={ title }
      open={open}
      onClose={onClose}
    >
      <Form>
        <Form.Item<FieldType>
          label="用户名">
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="用户名">
          <Input.Password />
        </Form.Item>
      </Form>
    </Drawer>
  )
}

export default UserFormDrawer