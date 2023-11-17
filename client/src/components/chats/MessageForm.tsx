import SendButton from '@/components/chats/SendButton'
import TextField from '@/components/chats/TextField'
import Emojis from '@/components/Emojis'
import type { StateDispatchAction } from '@/types'

export default ({
  changeHandler
}: {
  changeHandler: StateDispatchAction<string>
}) => {
  return (
    <form className='flex h-16 gap-2'>
      <Emojis />
      <TextField changeHandler={changeHandler} />
      <SendButton />
    </form>
  )
}
