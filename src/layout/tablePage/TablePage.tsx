import './tablePage.scss'
import type { ReactNode } from 'react'

type Props = {
  title: string,
  actions: ReactNode,
  children: ReactNode
}

const TablePage = (props: Props) => {
  const {
    title,
    actions,
    children
  } = props

  return (
    <div className="tablePage">
      <div className="tp_title">{title}</div>
      <div className="tp_content">
        <div className="tp_actions">{ actions }</div>
        { children }
      </div>
    </div>
  )
}


export default TablePage