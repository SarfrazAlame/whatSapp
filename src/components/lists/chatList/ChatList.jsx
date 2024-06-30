import React from 'react'
import UserInfo from '../userInfo/UserInfo'

const ChatList = () => {
  return (
    <div className='flex items-center'>
      <div className='flex'>
        <img src="./search.png" alt="" />
        <input type="text" placeholder='Search' />
      </div>
      <div>
        <img src="./plus.png" alt="" />
      </div>
    </div>
  )
}

export default ChatList