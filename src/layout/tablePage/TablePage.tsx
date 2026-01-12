import './tablePage.scss'
import type { ReactNode } from 'react'

type Props = {
  title: string,
  children: ReactNode
  search?: ReactNode,
  actions?: ReactNode,
}

const TablePage = (props: Props) => {
  const {
    title,
    search,
    actions,
    children
  } = props

  return (
    <div className="box-border p-4">
      <div className="pl-2 font-semibold text-[1.1rem] border-l-4 border-l-solid border-[#1677ff]">{title}</div>
      <div className="pt-4">
        {
          search &&
          <div className="flex p-4 mb-4 bg-white rounded-2 border-1 border-solid border-[#e2e8f0]">{ search }</div>
        }
        <div className="flex flex-col p-3 bg-white">
          { actions && <div className='pb-3'>{ actions }</div> }
          { children }
        </div>
      </div>
    </div>
  )
}


export default TablePage