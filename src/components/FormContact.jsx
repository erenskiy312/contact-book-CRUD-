import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormContact = (props) => {
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()
  
  console.log(props.contacts);

  return (
    <div>
      <input value={searchText} onChange={handleSearch} type="text" placeholder='Search...' />
    {props.contacts.map((contact, index) => (
        <ul key={contact.id}>
          {contact.image ? 
          <li >
            <img src={contact.image} alt="" />
          </li> : 
          <li>
            <img src="https://www.meme-arsenal.com/memes/4cdee02fbf6649b4e2c7b597f9d4d143.jpg" alt="" />
          </li>}
         
          <li className='li-name'>{contact.name}</li>
          <li className='li-phone'>{contact.phoneNumber}</li>
          <li className='li-email'>{contact.email}</li>
          <div>
            <button className='btn-edit' onClick={() => navigate(`/edit/${contact.id}`, props.handleOpenEditContact(index))}>EDIT</button>
            <button className='btn-delete' onClick={() => props.handleDeleteContact(contact.id)}>DELETE</button>
          </div>
        </ul>
      ))}

{/* <ul>
        {searchResults.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul> */}
      <a href="#" onClick={() => navigate('/')}>ADDd</a>
        </div>
  )
}

export default FormContact