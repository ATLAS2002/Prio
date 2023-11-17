import ChatList from './chats/ChatList'
import ChatNav from './navigation/SideNav'

export default () => {
  return (
    <section className='bg-primary-600 relative z-10 h-screen w-1/4 overflow-hidden p-2'>
      <ChatNav />
      <ChatList />
    </section>
  )
}
