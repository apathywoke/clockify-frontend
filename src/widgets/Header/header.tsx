// import frameworks

// import assets

import Logo from '../../shared/assets/icons/Logo.svg'
import Loop from '../../shared/assets/icons/UI/loop.svg'
import Bell from '../../shared/assets/icons/Bell.svg'
import User from '../../shared/assets/icons/User.svg'

const Header = () => {

    return(
        <header className='h-15 px-5 w-full flex items-center justify-between'>
            <div className='flex inline-flex items-center w-100 justify-between h-full'>
                <img src={Logo} alt="Logo"/>
                <div className='flex inline-flex items-center'>
                    <img src={Loop} alt="Loop" className='mr-2'/>
                    <input
                    type="text"
                    placeholder='Search user...'
                    className='font-extralight focus:ring-0 focus:border-red-400 outline-none text-sm
                    transition-all duration-200'>
                    </input>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={Bell} alt="Notifications" className='ml-10'/>
                <img src={User} alt="Notifications" className='ml-3'/>
            </div>
        </header>
    )
}

export default Header;