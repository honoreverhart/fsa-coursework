
import './App.css'
import { useState, useEffect } from "react";
import ContactList from './components/ContactList.jsx'
import SelectedContact from "./components/SelectedContact";


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {selectedContactId ? (
        
        <SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  )
}

export default App
