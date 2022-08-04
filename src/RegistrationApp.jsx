import { useState, useEffect } from 'react'
import './index.css'
import { getRecords } from './helpers/getRecords';
import mainLogo from './assets/page-icon.png'
import iconDashboard from './assets/Dashboard.svg'
import start from './assets/Star.svg'
import iconCalendar from './assets/Calendar.svg'
import iconCharacters from './assets/Characters.svg'
import iconChat from './assets/Chat.svg'
import iconLogout from './assets/Loguot.svg'
import iconFilter from './assets/Magic filter.svg'
import iconArrow from './assets/Down arrow.svg'
import imageAdventure from './assets/placeholder.png'
import iconConect from './assets/Conect.svg'

function RegistrationApp() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getRecords();
  }, []);

  {/* {data.map((item) => ( console.log(item.gender) ))} */}

  return (
    <div className='w-full px-4 flex gap-16 container-all h-screen'>
      <div className='container-menu basis-1/5 ml-16 my-16 p-4 flex flex-col justify-between rounded-2xl'>
        <div className='options-menu'>
          <img className='h-14' src={mainLogo} alt='logo-menu' />
          <div className='options-items flex flex-col mt-12'>
            <div className='option-item-selected h-10 flex justify-between items-center font-semibold cursor-pointer'>
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
        <div className='options-logout flex justify-between w-4/5 mb-4 font-medium'>
          <p>Logout</p>
          <img className='h-6' src={iconLogout} alt='icon-logout' />
        </div>
      </div>
      <div className='container-content basis-4/5 my-16 mr-48 flex flex-col gap-5'>
        <div className='content-title flex flex-col gap-9'>
          <p className='text-xl font-semibold'>Hi, User</p>
          <div className='content-actions flex justify-between h-9'>
            <div className='content-action-filter hs-dropdown relative inline-flex h-9'>
              <button id='hs-dropdown-filter' type='button' className='w-64 hs-dropdown-toggle inline-flex justify-between items-center rounded-lg border font-medium shadow-sm align-middle px-2 py-1 hover:bg-gray-50 focus:outline-none'>
                <div className='flex items-center gap-1'>
                  <img className='h-6' src={iconFilter} alt='icon-filter' />
                  <p className='text-base'>Filter by Character</p>
                </div>
                <img className='hs-dropdown-open:rotate-180 w-4 text-gray-600' src={iconArrow} alt='arrow-filter' />
              </button>
              <div className='hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-72 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700' aria-labelledby='hs-dropdown-filter'>
                <p className='flex items-center'>
                  Newsletter
                </p>
                <p className='flex items-center'>
                  Purchases
                </p>
                <p className='flex items-center'>
                  Downloads
                </p>
              </div>
            </div>
            <div className='content-action-add'>
              <button type='button' className='hs-dropdown-toggle w-40 h-9 px-1 py-5 inline-flex justify-center items-center rounded-md text-base' data-hs-offcanvas='#hs-offcanvas-right'>
                <p className='new-adventure font-semibold'>New adventure</p>
              </button>
              <div id='hs-offcanvas-right' className='hs-offcanvas hs-offcanvas-open:translate-x-0 translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-l dark:bg-gray-800 dark:border-gray-700' tabIndex='-1'>
                <p>Hola1</p>
                <p>Hola2</p>
              </div>
            </div>
          </div>
        </div>
        <div className='content-items w-full'>
          <div className='content-item flex items-center py-5 pl-4 gap-5 rounded-lg'>
            <img className='w-20 h-20 rounded-2xl' src={imageAdventure} alt='image-adventure' />
            <div className='content-item-info flex flex-col gap-2'>
              <p className='adventure-name text-lg font-medium'>Destroy The Ring on Mount Doom</p>
              <div className='content-item-detail flex gap-24'>
                <div className='content-item-name w-fit'>
                  <p className='text-lg info-item-dark'>Frodo Baggins</p>
                  <p className='text-sm info-item-gray'>Hobbit</p>
                </div>
                <div className='content-item-places flex gap-3'>
                  <img src={iconConect} alt='icon-contect' />
                  <div className='item-place-info'>
                    <p className='text-sm info-item-gray'>Origin  <span className='text-base info-item-dark'> Hobbiton </span></p>
                    <p className='text-sm info-item-gray'>Destination <span className='text-base info-item-dark'> Mordor </span> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='content-items w-full'>
          <div className='content-item flex items-center py-5 pl-4 gap-5 rounded-lg'>
            <img className='w-20 h-20 rounded-2xl' src={imageAdventure} alt='image-adventure' />
            <div className='content-item-info flex flex-col gap-2'>
              <p className='adventure-name text-lg font-medium'>Destroy The Ring on Mount Doom</p>
              <div className='content-item-detail flex gap-24'>
                <div className='content-item-name w-fit'>
                  <p className='text-lg info-item-dark'>Frodo Baggins</p>
                  <p className='text-sm info-item-gray'>Hobbit</p>
                </div>
                <div className='content-item-places flex gap-3'>
                  <img src={iconConect} alt='icon-contect' />
                  <div className='item-place-info'>
                    <p className='text-sm info-item-gray'>Origin  <span className='text-base info-item-dark'> Hobbiton </span></p>
                    <p className='text-sm info-item-gray'>Destination <span className='text-base info-item-dark'> Mordor </span> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationApp
