export default ({
  children,
  sender = false,
  muted = false
}: {
  children: string
  sender?: boolean
  muted?: boolean
}) => {
  return (
    <div
      className={`flex gap-2 drop-shadow-md ${
        sender ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <div className='bg-primary-100 aspect-square h-16 rounded-full'></div>
      <MessageBox muted={muted}>{children}</MessageBox>
    </div>
  )
}

const MessageBox = ({
  children,
  muted
}: {
  children: string
  muted?: boolean
}) => {
  return (
    <div
      className={`${
        muted ? 'bg-primary-400' : 'bg-primary-500'
      } mx-2 mt-2 h-fit max-w-sm rounded-md p-3 md:max-w-md`}
    >
      <p className='break-words whitespace-pre-line'>{children}</p>
    </div>
  )
}
