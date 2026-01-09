import type { FC } from 'react'


const Info: FC = () =>{ 
  return (
    <div className='p-6 bg-[#f8fafc] relative group'>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      <div className='flex items-center relative z-10'>
        <span className='text-2.5 color-white bg-[#000] p-1.5 rounded-[3px]'>LOGO</span>
        <span className='ml-4 color-[#9ba9bd]'>ENTERPRISE EDITION</span>
      </div>
      <div className="relative flex items-center justify-center my-12">
          <div className="absolute inset-0 bg-[#26C2C2]/20 rounded-full blur-2xl animate-pulse" ></div>
          <div className="w-24 h-24 bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center relative transform group-hover:scale-105 transition-transform duration-700"></div>
       </div>
      <div className="text-center">
          <h2 className="text-xl font-black text-slate-800 tracking-tight">智能充电 · 数据领航</h2>
          <p className="text-xs text-slate-400 mt-2 max-w-[240px] mx-[auto] leading-relaxed">基于深度学习的充电基础设施实时监控与计量大数据分析平台</p>
      </div>
    </div>
    
  )
}

    
export default Info