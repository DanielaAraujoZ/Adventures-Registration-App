import React from 'react'
import mainLogo from '../assets/page-icon.png'
import iconDashboard from '../assets/Dashboard.svg'
import start from '../assets/Star.svg'
import iconCalendar from '../assets/Calendar.svg'
import iconCharacters from '../assets/Characters.svg'
import iconChat from '../assets/Chat.svg'
import iconLogout from '../assets/Loguot.svg'

export const SideMenu = () => {
    return (
        <div id="docs-sidebar" className='container-menu hs-sidebar hs-sidebar-open:translate-x-0 mx-0 transition-all duration-300 rounded-none my-0 h-full fixed top-0 left-0 bottom-0 z-[60] hidden lg:basis-1/5 lg:ml-16 lg:my-16 p-4 lg:flex lg:visible lg:flex-col lg:justify-between lg:rounded-2xl lg:static lg:z-[0]'>
            <div className='options-menu'>
                <img className='h-14' src={mainLogo} alt='logo-menu' />
                <div className='flex flex-col mt-12'>
                    <div className='option-item h-10 flex justify-between items-center font-semibold cursor-pointer'>
                        <div className='flex gap-2.5'>
                            <img src={iconDashboard} className='h-6' alt='icon-dashboard' />
                            <p>Dashboard</p>
                        </div>
                        <img src={start} className='h-3' alt='start-selected' />
                    </div>
                    <div className='option-item h-10 flex items-center gap-2.5 font-medium'>
                        <img src={iconCalendar} className='h-6' alt='icon-calendar' />
                        <p>Calendar</p>
                    </div>
                    <div className='option-item h-10 flex items-center gap-2.5 font-medium'>
                        <img src={iconCharacters} className='h-6' alt='icon-characters' />
                        <p>Characters</p>
                    </div>
                    <div className='option-item h-10 flex items-center gap-2.5 font-medium'>
                        <img src={iconChat} className='h-6' alt='icon-chat' />
                        <p>Chat</p>
                    </div>
                </div>
            </div>
            <div className='option-item flex justify-between w-4/5 mb-4 font-medium'>
                <p>Logout</p>
                <img className='h-6' src={iconLogout} alt='icon-logout' />
            </div>
        </div>
    )
}
