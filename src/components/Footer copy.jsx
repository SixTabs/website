import React from 'react';
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'

const Footer = ()=>{

    return(
        <div className='w-full bg-slate-900 text-gray-300 py-y px-2'>
            <div className='max-w-[1000px] mx-auto border-b-2 border-gray-600 py-8'>
        
                <div className='col-span-2 pt-8 md-pt-2'>
                    <p className='font-bold uppercase'>Send us an email</p>
                    <p className='py-4'>Just reach out! we would love to hear from youu</p>
                    
                    <form name='contact' className='' >
                    <textarea type='textArea' className='w-full h-60 text-black p-2 mr-4 rounded-md mb-4' placeholder='Your message here..'></textarea>
                    <div className='flex flex-col sm:flex-row'>
                    <input type='email' className='w-full p-2 mr-4 rounded-md mb-4' placeholder='Email'/>
                        <button className='p-2 mb-4'>Send</button>
                    </div>
                        
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-w-[1240px]px-2 py-4 mx-auto  justify-between sm:flex-row text-center text-gray-500'>
                  <p className='py-4'>2022 SixTabs, ALl right reserved</p>  
                  <div className='flex justify-between  sm:w-[300px] pt-4 text-2xl'>
                      <FaFacebook/>
                      <FaInstagram/>
                      <FaTwitter/>
                      <FaGithub/>
                  </div>
            </div>
        </div>
    )
}

export default Footer;