import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const EditContact = (props) => {

  const [name, setName] = useState(props.editContact.name)
  const [phoneNumber, setPhoneNumber] = useState(props.editContact.phoneNumber)
  const [email, setEmail] = useState(props.editContact.email)
  const [image, setImage] = useState(props.editContact.image)

  const SaveContact = (e) => {
    e.preventDefault()

    if (!name){
      return alert('Please fill in the Name field')
      } else if (!phoneNumber) {
      return alert('Please fill in the Phone-Number field')
      } else if (!email){
      return alert('Please fill in the E-Mail field')
      }

      props.editContact.name = name;
      props.editContact.phoneNumber = phoneNumber;
      props.editContact.email = email;
      props.editContact.image = image

      props.handleEditContact(props.editContact)
  }

  return (
    <div className='wrapper'>
    <div className='inner-wrapper'>
    <form action="submit" onSubmit={SaveContact}>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' />
      {/* <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder='Phone-number' /> */}
      <PhoneInput className='input-phone' country={'kg'} value={phoneNumber} onChange={(value) => setPhoneNumber(value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='e-mail' />
      <input onChange={(e) => setImage(e.target.files[0])} type="file" accept='image/*' />
      <button className='btn-save'>SAVE CONTACT</button>  
    </form>
    </div>
  </div>
  )
}

export default EditContact