import React from 'react'

const UserInfo = () => {
  return (
    <div className='flex justify-between w-96'>
      <div className='flex items-center gap-5'>
        <img src='./avatar.png' alt='' className='w-10 h-10 rounded-full'/>
        <h2 className='font-bold'>Sarfraz Alam</h2>
      </div>
      <div className='flex gap-5'>
        <img src="./more.png" alt="" className='w-4 h-4 ' />
        <img src="./video.png" alt=""  className='w-4 h-4 '/>
        <img src="./edit.png" alt="" className='w-4 h-4 ' />
      </div>
    </div>
  )
}

export default UserInfo