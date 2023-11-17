import { ReactNode } from 'react'

export default ({ children }: { children: ReactNode }) => {
  return (
    <button className='border-primary-200 bg-primary-300 my-1 w-fit rounded-3xl border-t-2 px-5 font-mono text-xl shadow-lg'>
      {children}
    </button>
  )
}
