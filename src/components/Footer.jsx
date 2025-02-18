import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import { footerContactItems, footerItems1, footerItems2 } from '../constant/data'

const Footer = () => {
  return (
    <footer className='bg-neutral-800 pt-[60px] pb-9 text-neutral-100'>
        <div className="container ">
            <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-[1fr,0.5fr,1fr,1fr]">
            <div className="">
                <a href="" className=''>
                    <img src="./images/Logo.png" alt="footer logo"/>
                </a>
                <p className="my-[14px] text-neutral-50/60">
                Helping you find the perfect home with expert guidance and a seamless experience.
                </p>

                <div className="flex mt-3 gap-[29px]">
                    <a href="#" className='social-link'>
                        <IoLogoFacebook size={24} />
                    </a>
                    <a href="#" className='social-link'>
                        <IoLogoInstagram size={24} />
                    </a>
                    <a href="#" className='social-link'>
                        <IoLogoTwitter size={24} />
                    </a>
                    <a href="#" className='social-link'>
                        <IoLogoLinkedin size={24} />
                    </a>
                </div>
            </div>

            <ul> 
                <p className='text-[20px] font-bold text-white pb-[11px]'>Quick Links</p>
                {footerItems1.map((item,index)=>(
                    <li key={index} className='py-1.5'>
                        <a href="#" className='footer-link'>{item.label}</a>
                    </li>
                ))}
            </ul>

            <ul>
                <p className='footer-list-title'>Property Categories</p>
                {footerItems2.map((item,index)=>(
                    <li key={index} className='py-1.5'>
                        <a href="#" className='footer-link'>{item.label}</a>
                    </li>
                ))}
            </ul>

            <ul>
                <p className="footer-list-title">Contact Information</p>
                {footerContactItems.map((item,index)=>(
                    <li key={index} className='flex gap-2 mb-2'>
                        <span>{item.title}</span> 
                        <a href="#" className='footer-link'>{item.num}</a>
                    </li>
                ))}
            </ul>
            </div>
            <div className="w-full h-[2px] bg-neutral-300/20 mt-[40px] md:mt-[81px]"></div>
            <p className="mt-[31px] md:text-center text-neutral-50/90">
                &copy; copyright 2025 Homely.All rights reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer