import type React from "react"
import TablePage from "../../../layout/tablePage/TablePage"
import { Button, Space, Table, Tag } from 'antd'
import type { TableProps } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useEffect, useState } from "react"
import { userTableDataApi } from '../../../api/modules/systemManage/user'
import type { UserItem } from '../../../api/modules/systemManage/user'
import { UserStatus, displayName_userStatus } from '../../dictionary/index'

const userStatusTagType: Record<UserStatus, string> = {
  [UserStatus.Active]: 'success',
  [UserStatus.Inactive]: 'default'
}

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
        <a>修改</a>
        <a>删除</a>
      </Space>
    ),
  },
]
const Actions = (
  <Button
    type="primary"
    icon={ <PlusOutlined /> }>添加用户</Button>
)

const UserTable: React.FC = () => {

  const [ tableData, setTableData ] = useState<UserItem[]>([])
  const [ total, setTotal ] = useState(0)

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

  return (
    <TablePage
      title="用户列表"
      actions={Actions}>
      <Table<UserItem> columns={columns} dataSource={tableData} />
    </TablePage>
  )
}

export default UserTable