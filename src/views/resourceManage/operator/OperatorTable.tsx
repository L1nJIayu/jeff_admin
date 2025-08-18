import { Table } from 'antd'
import TablePage from '../../../layout/tablePage/TablePage'
import { useEffect, useState } from 'react'
import { getTableDataApi } from '../../../api/modules/resourceManage/operator'

const TableComp = () => {

  useEffect(() => {
    getData()
  }, [])

  const columns = [
    {
      title: '运营商ID',
      dataIndex: 'operatorId'
    },
    {
      title: '运营商名称',
      dataIndex: 'operatorName'
    },
    {
      title: '负责人',
      dataIndex: 'personInCharge'
    },
    {
      title: '负责人电话',
      dataIndex: 'personInChargeTel'
    },
    {
      title: '客户电话',
      dataIndex: 'operatorTel1'
    },
    {
      title: '安全负责人电话',
      dataIndex: 'operatorTel2'
    },
    {
      title: '注册地址',
      dataIndex: 'operatorRegAddress'
    },
  ]
  const [ dataSource, setDataSource ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const getData = async () => {
    try {
      const params = {
        pageNum: 1,
        pageSize: 10
      }
      setLoading(true)
      const res = await getTableDataApi(params)
      console.log('res',res)
      if(res.data) {
        const { list } = res.data
        setDataSource(list)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Table
      columns={columns}
      loading={loading}
      bordered
      dataSource={dataSource}></Table>
  )
}


const OperatorTable = () => {

  return (
    <TablePage
      title="运营商管理"
      children={<TableComp/>}></TablePage>
  )
}


export default OperatorTable