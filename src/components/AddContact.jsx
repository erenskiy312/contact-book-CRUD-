import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useNavigate } from 'react-router-dom'

const AddContact = (props) => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState(null)

  const navigate = useNavigate()
  
  const addContact = (e) => {
    e.preventDefault()

  if (!name){
    return alert('Please fill in the Name field')
    } else if (!phoneNumber) {
    return alert('Please fill in the Phone-Number field')
    } else if (!email){
    return alert('Please fill in the E-Mail field')
    }

    let newContact = {
      name,
      phoneNumber,
      email,
      id: Date.now(),
      image
    }

    props.handleNewContact(newContact)
    
    setName('');
    setPhoneNumber('');
    setEmail('');
    setImage('');

    navigate('/contacts')


    console.log(newContact);
  }

  const handleImageChange = (e) => {
    // Получаем выбранный файл из инпута
    const selectedFile = e.target.files[0];

    // Проверяем, что файл был выбран
    if (selectedFile) {
      // Создаем объект FileReader для чтения файла
      const reader = new FileReader();

      // Устанавливаем обработчик события, который срабатывает после загрузки файла
      reader.onload = (e) => {
        // Получаем URL изображения (Data URL)
        const imageURL = e.target.result;

        // Устанавливаем URL изображения в состояние
        setImage(imageURL);
      };

      // Читаем выбранный файл в формат Data URL
      reader.readAsDataURL(selectedFile);
    }


  }

  return (
    <div className='wrapper'>
      <div className='inner-wrapper'>
      <form action="submit" onSubmit={addContact}>
        <input className='input-name' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' />
        {/* <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder='Phone-number' /> */}
        <PhoneInput className='input-phone' value={phoneNumber} onChange={(value) => setPhoneNumber(value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='e-mail' />
        <input className='input-image' onChange={handleImageChange} type="file" accept='image/*' />
        <button>ADD CONTACT</button>  
      </form>
      </div>
    </div>
  )
}


export default AddContact