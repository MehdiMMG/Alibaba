import React from 'react'
import "../styles/main.scss"
import { FaLinkedin, FaX } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import { SiAparat } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


const Copyright = () => {
  return (
    <section className="copyright">
        <div className="text">
            <p className="text__detail">
                کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت سفرهای علی‌بابا می‌باشد. (نسخه 3.46.2)
            </p>
        </div>
        <div className="logos">
            <FaLinkedin className='logos__icon'/>
            <SlSocialInstagram className='logos__icon'/>
            <SiAparat className='logos__icon'/>
            <FaXTwitter className='logos__icon'/>
            <FaYoutube className='logos__icon'/>
            <FaTelegramPlane className='logos__icon'/>
        </div>
    </section>
  )
}

export default Copyright