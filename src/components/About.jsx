import React from 'react'

const About= ()=>{
    return(
        <div name='about' className='flex mt-8 py-8'>
            <div className='w-1/3'>
                <h1 className='text-3xl text-sky-900 font-semibold'> Our Vision</h1>
            <p>
                Our vision is to become a leading company in Africa that                  
                creates secure and accessible IT software systems and provides                   
                network security and cybersecurity support.
                 </p>
            </div>
            <div className='w-1/3'>
            <h1 className='text-3xl text-sky-900 font-semibold'> Our Mission</h1>
            <ul>
                   <li>
                     Helping public and private institutions acquire quality
                     software systems.
                   </li>
                   <li>
                     Helping public and private institutions by supporting them
                     in securing their networks.
                   </li>
                  <li>
                   Provide consultancy in cybersecurity and Software
                    engineering.
                   </li>
                   <li>
                     Help companies/institutions understand why software
                     accessibility matters.
                   </li>
                 </ul>
            </div>
            <div className='w-1/3'>
            <h1 className='text-3xl text-sky-900 font-semibold'> Our Values</h1>
            <ul>
                 <li>Professionalism </li>
                   <li>Integrity</li>
                  <li>Quality</li>
                   <li>Accessibility</li>
                </ul>
            </div>
        </div>
    )
}

export default About;