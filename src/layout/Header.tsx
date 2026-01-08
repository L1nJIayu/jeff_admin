import { LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'

const Header = () => {

  const navigate = useNavigate()

  const logout = () => {
    navigate('/login')
  }

  return (
    <div className="w-full h-full flex justify-between items-center">
      <div className="header_left"></div>
      <div className="pr-3">
        <LogoutOutlined
          className="text-1xl text-white cursor-pointer"
          onClick={logout}
        />
      </div>
    </div>
  )
}

export default Header