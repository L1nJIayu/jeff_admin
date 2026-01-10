import type { FC } from 'react'

const Info: FC = () =>{ 
  return (
    <div className='p-6 bg-[#f8fafc] relative group min-h-[400px]'> {/* 添加最小高度 */}
      {/* 网格背景层 - 最底层 */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* 内容层 - 上层 */}
      <div className='flex items-center relative z-10'>
        <span className='text-2xl text-white bg-[#000] p-1.5 rounded-[3px]'>LOGO</span>
        <span className='ml-4 text-[#9ba9bd]'>ENTERPRISE EDITION</span>
      </div>
      
      <div className="relative flex items-center justify-center my-12">
        <div className="absolute inset-0 bg-[#26C2C2]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="w-24 h-24 bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center relative transform group-hover:scale-105 transition-transform duration-700"></div>
      </div>
      
      <div className="text-center relative">
        <h2 className="text-xl font-black text-slate-800 tracking-tight">代码驱动 · 持续进化</h2>
        <p className="text-xs text-slate-400 mt-2 max-w-[240px] mx-auto leading-relaxed">
          用于个人技术实践与能力沉淀的实验平台，持续探索前端工程、系统架构与智能应用
        </p>
      </div>
    </div>
  )
}

export default Info