// import axiosInstance from "../../axios"

import axiosInstance from "../../axios"

export type UserItem = {
  id: number
  username: string
  name: string
  status: number
}
type UserTableDataApiRes = {
  data: {
    list: UserItem[],
    total: number
  }
}
export function userTableDataApi(params: {
  pageNum: number
  pageSize: number
}): Promise<UserTableDataApiRes> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        params,
        data:{
          list: [
            { id: 1, username: 'jeffreyA', name: '林小A', status: 0 },
            { id: 2, username: 'jeffreyB', name: '林小B', status: 1 },
            { id: 3, username: 'jeffreyC', name: '林小C', status: 0 },
          ],
          total: 12
        }
      })
    })
  })
}


export function deleteUserApi(id: number) {
  return axiosInstance.delete(`${id}`)
}