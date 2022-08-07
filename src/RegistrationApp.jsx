import { useState, useEffect } from 'react'
import './index.css'

import { getRecords } from './helpers/getRecords';
import { SideMenu } from './components/SideMenu';
import { AdventuresList } from './components/AdventuresList';
import { WelcomeMessage } from './components/WelcomeMessage';
import { AdventuresTitleSection } from './components/AdventuresTitleSection';

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
        <AdventuresTitleSection
          data= { data }
          adventure={ adventure }
          setAdventures={ setAdventures }
          characterFilter={ characterFilter }
          setCharacterFilter={ setCharacterFilter }
        />
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
