import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")

  const handlerEmoji = (e) => {
    setText((prev) => prev + e.emoji)
    setOpen(false)
  }
  return (
    <div className='border-l w-full h-screen  border-gray-400'>
      <div className='border-b border-gray-400 p-3'  >
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
        </div>
      </div>


      <div className='h-4/5 w-full overflow-scroll flex flex-col gap-4'>
        <div className='w-2/3 flex gap-4'>
          <img src="./avatar.png" alt="" className='w-10 h-10 rounded-full '/>
          <div>
            <p className='bg-gray-500 p-3 rounded'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa quam adipisci harum fuga deserunt iusto, quos a amet praesentium quasi est nostrum vero aliquam optio vel similique tempora eligendi!</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='w-2/3 flex gap-4 items-end'>
          <div>
            <p  className='bg-blue-500 rounded w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa quam adipisci harum fuga deserunt iusto, quos a amet praesentium quasi est nostrum vero aliquam optio vel similique tempora eligendi!</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='w-2/3 flex gap-4'>
          <img src="./avatar.png" alt="" className='w-10 h-10 rounded-full '/>
          <div>
            <p className='bg-gray-500 p-3 rounded'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa quam adipisci harum fuga deserunt iusto, quos a amet praesentium quasi est nostrum vero aliquam optio vel similique tempora eligendi!</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='w-2/3 flex gap-4 items-end'>
          <div>
            <p className='bg-blue-500 rounded w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa quam adipisci harum fuga deserunt iusto, quos a amet praesentium quasi est nostrum vero aliquam optio vel similique tempora eligendi!</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='w-2/3 flex gap-4'>
          <img src="./avatar.png" alt="" className='w-10 h-10 rounded-full '/>
          <div>
            <p className='bg-gray-500 p-3 rounded'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa quam adipisci harum fuga deserunt iusto, quos a amet praesentium quasi est nostrum vero aliquam optio vel similique tempora eligendi!</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='w-2/3 flex gap-4 items-end'>
          <div>
            <p className='bg-blue-500 rounded w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa quam adipisci harum fuga deserunt iusto, quos a amet praesentium quasi est nostrum vero aliquam optio vel similique tempora eligendi!</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-400 '>
        <div className='flex h-12 justify-center w-full my-4 sticky'>
          <div className='flex items-center gap-5 mx-4'>
            <img src="./img.png" alt="" className='h-4 w-4' />
            <img src="./camera.png" alt="" className='h-4 w-4' />
            <img src="./mic.png" alt="" className='h-4 w-4' />
          </div>
          <input type="text" name="" value={text} placeholder='Type message' className='w-2/3 rounded-md bg-transparent border' onChange={(e) => setText(e.target.value)} />
          <div className='flex items-center'>
            <img src="./emoji.png" alt="" className='w-6 h-6 mx-4' onClick={() => setOpen((pre) => !pre)} />
            <div className='absolute bottom-10'>
              <EmojiPicker open={open} onEmojiClick={handlerEmoji} />
            </div>
          </div>
          <button className='bg-blue-400 px-4 rounded'> Send</button>
        </div>
      </div>
    </div >
  )
}

export default Chat