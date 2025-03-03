// import frameworks

import React, { useState } from 'react'

// import assets

import Logo from '../../shared/assets/icons/Logo.svg'
import Loop from '../../shared/assets/icons/UI/loop.svg'

const Header = () => {

    const [ findUser, setFindUser ] = useState("")

    return(
        <header className='h-15 px-5'>
            <div className='flex inline-flex items-center w-100 justify-between h-full'>
                <img src={Logo} alt="Logo"/>
                <div className='flex inline-flex items-center'>
                    <img src={Loop} alt="Loop" className='mr-2'/>
                    <input
                    type="text"
                    // onChange={(e) => setFindUser(e.target.value)}
                    placeholder='Search user...'
                    className='font-extralight focus:ring-0 focus:border-red-400 outline-none text-sm
                    transition-all duration-200'>
                    </input>
                </div>
            </div>
        </header>
    )
}

export default Header;