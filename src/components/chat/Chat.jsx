import React from 'react'

const Chat = () => {
  return (
    <div className='border-l w-full h-screen border-gray-400'>
      <div className='border-b border-gray-400 p-3'>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <div><img src="./avatar.png" alt="" className='w-12 rounded-full' /></div>
            <div>
              <span>Sarfraz Alam</span>
              <p className='text-sm'>Lorem ipsum dolor sit</p>
            </div>
          </div>
          <div className='flex gap-2 justify-end'>
            <img src="./phone.png" alt="" className='w-4 h-4' />
            <img src="./video.png" alt="" className='w-4 h-4' />
            <img src="./info.png" alt="" className='w-4 h-4' />
          </div>
        </div>KMKJKNDSNFKJSNDKJSNKSNDFNSFDGNKSNFFSDKGDFGODGKDFKGNDFGJDFFKNGKFDNGKNDF
      </div>
      <div></div>
      <div className='flex h-16 w-full'>
        <div className='flex items-center justify-between'>``
          <img src="./img.png" alt="" className='h-6 w-6'/>
          <img src="./camera.png" alt="" className='h-6 w-6'/>
          <img src="./mic.png" alt="" className='h-6 w-6'/>
        </div>
        <input type="text" name="" placeholder='Type message' />
        <div>
          <img src="./emoji.png" alt="" />
        </div>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Chat