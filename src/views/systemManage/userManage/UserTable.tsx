import type React from "react"
import TablePage from "../../../layout/tablePage/TablePage"
import { Button, Space, Table, Tag, Popconfirm } from 'antd'
import type { TableProps } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useEffect, useState } from "react"
import { userTableDataApi, deleteUserApi } from '../../../api/modules/systemManage/user'
import type { UserItem } from '../../../api/modules/systemManage/user'
import { UserStatus, displayName_userStatus } from '../../dictionary/index'
import UserFormDrawer from "./UserFormDrawer"

const userStatusTagType: Record<UserStatus, string> = {
  [UserStatus.Active]: 'success',
  [UserStatus.Inactive]: 'default'
}



const UserTable: React.FC = () => {

  const [ tableData, setTableData ] = useState<UserItem[]>([])
  const [ total, setTotal ] = useState(0)
  const [ openUserFormDrawer, setOpenUserFormDrawer ] = useState(false)

  const [ actionId, setActionId ] = useState<number>()
  
  const columns: TableProps<UserItem>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => (
        <>
          {
            <Tag
              color={userStatusTagType[status as UserStatus]}
              key={status}>
              {displayName_userStatus[status as UserStatus]}
            </Tag>
          }
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="link"
            onClick={() => {
              setOpenUserFormDrawer(true)
              setActionId(record.id)
            }}>修改</Button>
          <Popconfirm
            title="删除用户"
            description="你确定要删除该用户吗？"
            onConfirm={() => handleDeleteUser(record.id)}
            okText="确定"
            cancelText="取消"
          >
            <Button type="link" danger>删除</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  useEffect(() => {
    getTableData()
  }, [])


  const getTableData = async () => {
    try {
      const params = {
        pageNum: 1,
        pageSize: 10
      }
      const { data } = await userTableDataApi(params)
      if(data) {
        const { list, total } = data
        setTableData(list)
        setTotal(total)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const Actions = (
    <Button
      type="primary"
      icon={ <PlusOutlined /> }
      onClick={() => setOpenUserFormDrawer(true)}>添加用户</Button>
  )

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUserApi(id)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <TablePage
      title="用户列表"
      actions={Actions}>
        <input />
      <Table<UserItem> columns={columns} dataSource={tableData} />
      <UserFormDrawer
        id={actionId}
        open={openUserFormDrawer}
        onClose={() => {
          setActionId(undefined)
          setOpenUserFormDrawer(false)
        }}></UserFormDrawer>
    </TablePage>
  )
}

export default UserTable