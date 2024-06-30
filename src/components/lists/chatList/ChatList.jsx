import React, { useState } from 'react'
import UserInfo from '../userInfo/UserInfo'

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
    <div>
      <div className='flex gap-4 items-center my-7'>
        <div className='flex gap-2'>
          <img src="./search.png" alt="" className='w-6 ' />
          <input type="text" placeholder='Search' className='rounded-md bg-transparent border' />
        </div>
        <div>
          <img src={addMode ? "./minus.png" : "./plus.png"} alt="" onClick={() => setAddMode((current => setAddMode(!current)))} className='w-6' />
        </div>
      </div>

      <div className='flex flex-col gap-y-2'>
        <div className='flex h-14 border-b border-gray-500 cursor-pointer gap-3 gap-y-2'>
          <div>
            <img src="./avatar.png" alt="" className='w-10 rounded-full' />
          </div>
          <div>
            <span>Perwez Sir</span>
            <p className='text-sm'>Hello</p>
          </div>
        </div>

        <div className='flex h-14 border-b border-gray-500 cursor-pointer gap-3 gap-y-2'>
          <div>
            <img src="./avatar.png" alt="" className='w-10 rounded-full' />
          </div>
          <div>
            <span>Perwez Sir</span>
            <p className='text-sm'>Hello</p>
          </div>
        </div>

        <div className='flex h-14 border-b border-gray-500 cursor-pointer gap-3 gap-y-2'>
          <div>
            <img src="./avatar.png" alt="" className='w-10 rounded-full' />
          </div>
          <div>
            <span>Perwez Sir</span>
            <p className='text-sm'>Hello</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatList