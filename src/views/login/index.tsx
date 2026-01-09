import React from 'react'
import LoginForm from './LoginForm'
import Info from './Info'

const LoginPage: React.FC = () => {

  return (
    <div className="w-full h-full bg-[#f0f2f5] flex justify-center items-center">
      <div className="w-[700px] grid grid-cols-2">
        <div className="bg-[#f8fafc]">
          <Info />
        </div>
        <div className="bg-[#FFF] p-8">
          <div className="text-[1.3rem] font-semibold">充电桩大数据平台</div>
          <div className="mt-4 pt-9 pb-3">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginPage