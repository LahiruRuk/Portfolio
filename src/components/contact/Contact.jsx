import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
  
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='.contact__option-icon'/>
            <h4>Email</h4>
            <h5>infor@digiplaz.com</h5>
            <a href="mailto:dummyegator@gmail.com"  target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
           
            <RiMessengerLine className='.contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/lahiru.rukshan.756"  target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='.contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+98673634726</h5>
            <a href="" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* end of the contact section  */}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Mail' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
