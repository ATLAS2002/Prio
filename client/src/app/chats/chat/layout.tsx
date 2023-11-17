import NavButtons from '@/components/navigation/Buttons'

export default function ChatLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-primary-500 w-3/4 p-4 pt-0'>
      <div className='h-full w-full'>
        <div className='mb-3 flex h-16 gap-6 px-2 pt-3'>
          <NavButtons>Home</NavButtons>
          <NavButtons>Group: N-words in Paris</NavButtons>
        </div>
        <div className='border-primary-200 bg-primary-300 shadow-primary-800 h-[90%] overflow-hidden rounded-3xl border-b-2 px-5 pb-16 pt-1 shadow-inner'>
          {children}
        </div>
      </div>
    </div>
  )
}
