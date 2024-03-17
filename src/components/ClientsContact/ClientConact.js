import React, { useRef } from 'react'
import './ClientsContact.css'
import adaan from '../../assets/adaan.png'
import google from '../../assets/google.png'
import ibm from '../../assets/ibm.png'
import infosys from '../../assets/infosys.png'
import linkedin from '../../assets/linkedin.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import emailjs from '@emailjs/browser';

const ClientConact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_6zoy31c', 'template_xai2wgi', form.current, {
            publicKey: 'nHHdUvTnr8Tlwvbblc80T',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert("Email has been sent");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id='ClientsContact'>
        <div id='clientsPage'>
                <h2 className='contactTitle'>My Honourable Clients</h2>
                <p className='contactDesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                <div className='contactImages'>
                    <img className='contactImg' src={adaan} alt='Adaan' />
                    <img className='contactImg' src={google} alt='Google' />
                    <img className='contactImg' src={ibm} alt='IBM' />
                    <img className='contactImg' src={infosys} alt='Infosys' />

                </div>
        </div>
        <div id='contactform'>
            <h1 className='formTitle'>Contact me</h1>
            <span className='formDesc'>Please feel free for contact me after filling the form</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name1' placeholder='Your Good Name' name='your_name'/>
                <input type='email' className='email' placeholder='Type your email' name='your_email' />
                <textarea className='massage' name='message' rows='5' placeholder='Type something massage please'></textarea>
                <button type='submit' value='Send' className='contactBtn'>Submit</button>
                <div className='link'>
                    <img className='socialLink' src={linkedin} alt='linkedin' />
                    <img className='socialLink' src={facebook} alt='facebook' />
                    <img className='socialLink' src={instagram} alt='instagram' />
                    <img className='socialLink' src={twitter} alt='twitter' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default ClientConact
