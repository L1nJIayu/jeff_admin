import axiosInstance from "../../instance/zYoung"

export function getTableDataApi(params: {
  pageNum: number
  pageSize: number
}) {
  return axiosInstance.get('/cickpOperatorController/list', { params })
}