import React from 'react'
import List from './components/lists/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import './index.css'

const App = () => {
  return (
    <div className='p-6'>
      <div className='flex w-full justify-around'>
        <div className='flex'>
          <List />
          <Chat />
        </div>
        <Detail />
      </div>
    </div>
  )
}

export default App