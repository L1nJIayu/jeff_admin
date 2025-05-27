import React from "react"
import { useNavigate } from 'react-router'

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const logout = () => {
    navigate('/login')
  }

  return (
    <>
      <div>首页</div>
    </>
  )
}

export default HomePage