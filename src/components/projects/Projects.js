import React from 'react'
import './Projects.css'
import html from '../../assets/htmlcss.png'
import js3 from '../../assets/js3.jpg'
import css from '../../assets/css.jpeg'
import react from '../../assets/react.jpg'
import tailwindcss from '../../assets/tailwindcss.webp'

const Projects = () => {
  return (
   <section id='myprojects'>
        <h2 className='projectsTitle'>My projects Portfolio</h2>
        <span className='projectsDesc'>TThere are Some projects which is created and designed by my self using code and different technology</span>
        <div className='projectsThumb'>
            <img src={html}  alt='prjects 1' className='thumbnail'/>
            <img src={js3}  alt='projects 2' className='thumbnail'/>
            <img src={css}  alt='projects 3' className='thumbnail'/>
            <img src={react}  alt='projects 4' className='thumbnail'/>
            <img src={tailwindcss}  alt='projects 5' className='thumbnail'/>
            
           
        </div>
        <button className='Projectbtn'>See more</button>
   </section>
  )
}

export default Projects
