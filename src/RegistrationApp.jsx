import { useState, useEffect } from 'react'
import './index.css'
import iconFilter from './assets/Magic filter.svg'
import iconArrow from './assets/Down arrow.svg'

import { getRecords } from './helpers/getRecords';
import { SideMenu } from './components/SideMenu';
import { FormSlideOver } from './components/FormSlideOver';
import { AdventuresList } from './components/AdventuresList';
import { ListCharacterFilter } from './components/ListCharacterFilter';
import { WelcomeMessage } from './components/WelcomeMessage';

function RegistrationApp() {

  const [data, setData] = useState([]);
  const [adventure, setAdventures] = useState(JSON.parse(localStorage.getItem('CHARACTERS')) ?? []);
  const [characterFilter, setCharacterFilter] = useState([])

  const getCharacter = async () => {
    const dataRecords = await getRecords();
    setData(dataRecords);
  };

  useEffect(() => {
    getCharacter();
  }, []);


  return (
    <div className='w-full px-4 flex gap-16 container-all h-full'>
      <SideMenu/>
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
              <div className='hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-64 hidden z-10 p-5 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700' aria-labelledby='hs-dropdown-filter'>
                { characterFilter.length === 0
                    ? <p className='text-center font-medium'> No characters. <br/> <span className='font-normal'> Create an adventure </span> </p>
                    : characterFilter.map((item) => (
                        <ListCharacterFilter { ...item }/>
                    ))
                }
              </div>
            </div>
            <FormSlideOver
              data={ data }
              adventure={ adventure }
              setAdventures={ setAdventures }
              setCharacterFilter={ setCharacterFilter }
              />
          </div>
        </div>
        {
          adventure.length !== 0 ?
            adventure.map((item) => (
              <AdventuresList {... item }/>
            )) :
            <WelcomeMessage />
        }
      </div>
    </div>
  )
}

export default RegistrationApp
