import React from 'react'
import Config from '../Config.js/configImages'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 z-10 bg-gradient-to-b from-black/100  w-full'>
        <img src={Config.netflixLogo} alt="Netflix Logo" className="w-48 h-15" />
    </div>
  )
}

export default Header