import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'> 
        <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
        <div className='rightSide'>
            <h1>Contact us</h1>

            <form id='contact-form' method='POST'>
                <label htmlFor='name'for>Full Name</label>
                <input name='name' 
                placeholder='Enter full name ...' 
                type='text'/>
                <label htmlFor='email'for>Email</label>
                <input name='Email' 
                placeholder='Enter email ...' 
                type='email'/>
                <label htmlFor='message'for>Message</label>
                <textarea rows='6' placeholder='Enter message' name='message'></textarea>
                <button type='Submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}
 
 export default Contact
