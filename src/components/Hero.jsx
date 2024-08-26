import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='w-full h-[100vh]'>
<img src={assets.hero_img} className='w-full h-full' alt="" />
    </div>
  )
}

export default Hero