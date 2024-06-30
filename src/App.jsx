import React from 'react'
import List from './components/lists/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'

const App = () => {
  return (
    <div>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App