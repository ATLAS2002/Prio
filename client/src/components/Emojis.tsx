'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFaceSmile,
  faFaceSmileWink
} from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

export default () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <button
      type='button'
      onClick={() => setOpen(!open)}
      className='border-primary-200 bg-primary-500 text-primary-200 ring-primary-300 group my-2 aspect-square h-12 rounded-full border-t-2 p-3 font-extrabold shadow-xl ring-2'
    >
      <div className={`${open ? 'rotate-0' : 'rotate-[359deg]'} transition duration-300 h-full w-full`}>
        {open ? (
          <FontAwesomeIcon
            icon={faFaceSmileWink}
            className='text-primary-300 group-hover:text-primary-200 h-full w-full transition duration-300'
          />
        ) : (
          <FontAwesomeIcon
            icon={faFaceSmile}
            className='text-primary-300 group-hover:text-primary-200 h-full w-full transition duration-300'
          />
        )}
      </div>
    </button>
  )
}
