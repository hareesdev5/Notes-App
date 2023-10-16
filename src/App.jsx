import React from 'react'
import Addnote from './components/addnote'
import Sidebar from './components/sidebar'
import Usercontext from './context/userContext'
import NoteContext from './context/noteContext'

function App() {
  return (
    <div className='d-flex' id='app'>
      <Sidebar/>
       <NoteContext>
          <Usercontext>
            <Addnote/>
          </Usercontext>
       </NoteContext>
    </div>
  )
}

export default App
