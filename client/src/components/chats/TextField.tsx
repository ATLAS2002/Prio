import type { StateDispatchAction, MessageChangeEvent } from '@/types'

export default ({
  changeHandler
}: {
  changeHandler: StateDispatchAction<string>
}) => {
  const handler = (event: MessageChangeEvent) => {
    changeHandler(event.target.value.trim())
  }
  return (
    <textarea
      onChange={handler}
      autoFocus
      className='border-primary-200 bg-primary-500 text-primary-200 caret-primary-200 placeholder-primary-300 ring-primary-300 my-2 grow resize-none rounded-3xl border-t-2 p-2 px-6 text-2xl shadow-xl ring-2'
      placeholder='start typing...'
    />
  )
}
