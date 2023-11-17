'use client'

import { useState } from 'react'

import MessageList from '@/components/chats/MessageList'
import MessageForm from '@/components/chats/MessageForm'

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([])
  const [currentMessage, setCurrentMessage] = useState<string>('')

  return (
    <section className='h-full'>
      <div className='relative h-full overflow-auto'>
        <div className='bg-gradient-fade-top absolute top-0 z-50 h-10 w-full'></div>
        <MessageList>{currentMessage}</MessageList>
        <div className='bg-gradient-fade-bottom absolute bottom-0 z-50 h-10 w-full'></div>
      </div>
      <MessageForm changeHandler={setCurrentMessage} />
    </section>
  )
}
