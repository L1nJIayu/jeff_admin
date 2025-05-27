import { LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'

const Header = () => {

  const navigate = useNavigate()

  const logout = () => {
    navigate('/login')
  }

  return (
    <div className="header">
      <div className="header_left"></div>
      <div className="header_right">
        <LogoutOutlined
          className="text-2xl text-white cursor-pointer"
          onClick={logout}
        />
      </div>
    </div>
  )
}

export default Header