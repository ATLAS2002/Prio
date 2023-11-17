import Message from './Message'

export default ({ children }: { children: string }) => {
  return (
    <div className='bottom-0 flex h-full w-full flex-col-reverse gap-5 overflow-auto'>
      <div className='sticky h-20' />
      {
        children.length > 0 && 
        <Message sender={true} muted={true}>{children}</Message>
      }
      <Message>Is this still in progress?</Message>
      <Message sender={true}>
        Yes you and I are just placeholders, and we will soon be replaced with
        real messages.
      </Message>
      <Message>Well that sucks, ...for us</Message>
      <Message>Is this still in progress?</Message>
      <Message sender={true}>
        Yes you and I are just placeholders, and we will soon be replaced with
        real messages.
      </Message>
      <Message>Well that sucks, ...for us</Message>
      <Message>Is this still in progress?</Message>
      <Message sender={true}>
        Yes you and I are just placeholders, and we will soon be replaced with
        real messages.
      </Message>
      <Message>Well that sucks, ...for us</Message>
      <Message>Is this still in progress?</Message>
      <Message sender={true}>
        Yes you and I are just placeholders, and we will soon be replaced with
        real messages.
      </Message>
      <Message>Well that sucks, ...for us</Message>
      <Message>Is this still in progress?</Message>
      <Message sender={true}>
        Yes you and I are just placeholders, and we will soon be replaced with
        real messages.
      </Message>
      <Message>Well that sucks, ...for us</Message>
      <Message>Is this still in progress?</Message>
      <Message sender={true}>
        Yes you and I are just placeholders, and we will soon be replaced with
        real messages.
      </Message>
      <Message>Well that sucks, for us</Message>
      <div className='sticky h-20' />
    </div>
  )
}
