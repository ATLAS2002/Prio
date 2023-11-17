import SideBar from '@/components/SideBar'

export default function ChatsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className='flex h-screen w-full'>
      <SideBar />
      {children}
    </section>
  )
}
