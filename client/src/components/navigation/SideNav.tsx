export default () => {
  return (
    <nav className='ring-primary-400 bg-gradient-fade-dark absolute flex h-16 w-[96%] justify-between gap-2 overflow-clip rounded-[100px] p-2 shadow-2xl ring-2 backdrop-blur-sm'>
      <button className='bg-primary-400 h-full rounded-3xl px-5 shadow-lg'>
        Add group
      </button>
      <button className='bg-primary-400 h-full rounded-3xl px-5 shadow-lg'>
        Remove group
      </button>
    </nav>
  )
}
