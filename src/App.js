import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import './App.scss';
import AddContact from './components/AddContact';
import FormContact from './components/FormContact';
import EditContact from './components/EditContact'

function App() {
  const [contacts, setContacts] = useState([])
  const [editContact, setEditContact] = useState({})
  

  const navigate = useNavigate()

  const handleNewContact = (newContact) => {
    let newContactArray = [...contacts]
    newContactArray.push(newContact)
    setContacts(newContactArray)
  }


  const handleDeleteContact = (id) => {
    let newContactArray = contacts.filter(item => {
     return item.id !== id
    })
    setContacts(newContactArray)
  }

  const handleOpenEditContact = (index) => {
    setEditContact(contacts[index])
    navigate('/edit')
  }

  const handleEditContact = (newContact) => {
    const newContactArray = contacts.map(item => {
      if (item.id === newContact.id) {
        return newContact
      }
        return item
    })
    setContacts(newContactArray)
    navigate('/contacts')
  }


  return (
    <div>
          <h1 style={{cursor: 'pointer'}} onClick={() => navigate('/contacts')}>Contact Book</h1>
      <Routes>
        <Route 
        path='/' 
        element={<AddContact 
        handleNewContact={handleNewContact}/>}/>

        <Route 
        path='contacts' 
        element={<FormContact 
        contacts={contacts}
        setContacts={setContacts}
        handleDeleteContact={handleDeleteContact} 
        handleOpenEditContact={handleOpenEditContact} 
        />
        }/>

        <Route 
        path='edit/:id' 
        element={<EditContact 
        editContact={editContact}
        handleEditContact={handleEditContact}
        />}/>
      </Routes>
    </div>
  );
}

export default App;
