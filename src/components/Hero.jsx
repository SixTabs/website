import React from 'react'
import hero_img from '../assets/hero-img.png'

const Hero = ()=>{
    return(
        <div className='w-full flex justify-between'>
            <div className='m-20 p-8 w-1/2'>
            <h1 className='text-5xl text-sky-700 font-semibold'> Accessible, usable and secure systems</h1> 
            
            <p className='text-2xl mt-4'>
            Did you know that around 15% of the world’s population or if
                    you want 1 billion and 50 millions of people in the worls
                    have some sort of
                    disability?(https://apps.who.int/iris/handle/10665/44575)It
                    is important to think about it when creating applications.
            </p>
            </div>
            
            <div className='w-1/2'> <img src={hero_img} alt="" /></div>
        </div>
    )
}

export default Hero;