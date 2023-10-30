import React from 'react'
import './Footer.css'
import {FaMediumM} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import {IoLogoDiscord} from 'react-icons/io5'
const Footer = () => {
  return (
    <div className='footermain'>
        <div className='footerLogoDiv'>
            <img src='./images/logo.jpeg' alt='image' className='footerLogo'/>
            <p className='footerLogoText'>Romi Finance</p>
        </div>
        <div className='footerIconsDiv'>
            <BsTwitter className='footerIcons'/>
            <FaMediumM className='footerIcons'/>
            <BsGithub className='footerIcons'/>
            <BsTelegram className='footerIcons'/>
            <IoLogoDiscord className='footerIcons'/>
        </div>
        <div className='footerText'>
            <p className='terms'>Terms and Conditions</p>
            <p className='referral'>Referral Terms</p>
            <p className='media'>Media Kit</p>
        </div>
    </div>
  )
}

export default Footer