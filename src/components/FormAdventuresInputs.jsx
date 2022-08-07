import React from 'react'
import { FormCombobox } from './FormCombobox'
import iconConect from '../assets/Conect.svg'

export const FormAdventuresInputs = ({ data, selectedCharacter, setSelectedCharacter, query, setQuery }) => {
    return (
        <div className='flex flex-col'>
            <h4 className='info-item-gray text-lg leading-7 font-semibold my-5'>About Adventure</h4>
            <label className='content-title text-sm' htmlFor="adventureName">
                Adventure Name
                <input type="text" name="adventure-name" id="adventureName" className='w-full form-input h-12 rounded-lg' required/>
            </label>
            <div className='flex items-center gap-5 ml-5 my-3'>
                <img className='h-24 mt-4' src={ iconConect } alt="icon-conect" />
                <div className='flex flex-col gap-5'>
                    <label className='text-sm text-black' htmlFor="adventureOrigin">
                        Origin
                        <input type='text' name="adventure-origin" id='adventureOrigin' className='content-title h-12 form-input rounded-lg mt-1' required/>
                    </label>
                    <label className='name-input text-sm' htmlFor="adventureDestination">
                        Destination
                        <input type='text' name='adventure-destination' id='adventureDestination' className='content-title form-input text-base h-12 rounded-lg mt-1 focus:outline-none' required/>
                    </label>
                </div>
            </div>
            <h4 className='info-item-gray text-lg leading-7 font-semibold my-5'>Who is the Character</h4>
            <p className='text-sm text-black'>Character</p>
            <FormCombobox
                data={ data }
                selectedCharacter={ selectedCharacter }
                setSelectedCharacter={ setSelectedCharacter }
                query={ query }
                setQuery={ setQuery }
            />
        </div>
    )
}
