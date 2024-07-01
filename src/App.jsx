import React from 'react'
import List from './components/lists/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import './index.css'

const App = () => {
  return (
    <div className=''>
      <div className='flex w-full justify-between mx-12'>
        <List />
        <Chat />
        <Detail />
      </div>
    </div>
  )
}

export default App