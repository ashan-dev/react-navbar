import { useState } from 'react'
import Dropdown from './Components/Dropdown/DropdownContext';

function App() {


  return (
    <Dropdown>
      <Dropdown.Toggle/>
      <Dropdown.Menu>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>LogOut</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default App
