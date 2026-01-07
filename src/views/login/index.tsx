import React from 'react'
import LoginForm from './LoginForm'

const LoginPage: React.FC = () => {

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[400px] translate-y-[-150px]">
        <div className="text-center text-xl">充电桩大数据平台</div>
        <div className="mt-4 px-6 pt-9 pb-3 box-border rounded-[5px] shadow-[0_0_5px_#CCC]">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
export default LoginPage