import React from 'react'
import './Intro.css'
import image from '../../assets/image.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/call.png'

const Intro = () => {
  return (
   <section id='intro'>
    <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I am <span className='name'>Munna Kumar</span><br/>Website Designer</span>
        <p className='introParagraph'>I am a Web Designer with the purpose of creating<br/> UI and UX design using Html css and React JS</p>
        <Link><button className='btn'><img src={btnImg} alt="Hire Button" className='btnImg'/>Call Me</button></Link>
    </div>
    <img src={image} alt='Profile' className='profile'/>
   </section>
  )
}

export default Intro
