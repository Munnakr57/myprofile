import React from 'react'
import ui from '../../assets/ui.png'
import website from '../../assets/website.png'
import appdesign from '../../assets/appdesign.png'
import './Skills.css'

const Skills = () => {
  return (
    <section id='skillsSection'>
        <span className='skTitle'>What i do</span>
        <span className='skDesc'>I am a professional and experienced skilled web designer</span>
        <div className='groupSkillsBar'>
            <div className='skBar'>
                <img src={ui} alt='UI design' className='skBarImg' />
                <div className='skBarText'>
                    <h2>UI design Creation</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                    </p>
                </div>
            </div>
            <div className='skBar'>
                <img src={website} alt='UI design' className='skBarImg' />
                <div className='skBarText'>
                    <h2>Website Design Creation</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
            </div>
            <div className='skBar'>
                <img src={appdesign} alt='UI design' className='skBarImg' />
                <div className='skBarText'>
                    <h2>App Design Creation</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
