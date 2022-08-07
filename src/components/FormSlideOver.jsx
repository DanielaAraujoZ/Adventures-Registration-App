import React from 'react'
import { useState, useEffect } from 'react';
import iconClose from '../assets/Close.svg'
import iconConect from '../assets/Conect.svg'
import { FormCombobox } from './FormCombobox';

export const FormSlideOver = ({ data, adventure, setAdventures, setCharacterFilter }) => {

    const [selectedCharacter, setSelectedCharacter] = useState('');
    const [query, setQuery] = useState('');

    const createNewAdventure = (event) => {
        event.preventDefault();
        let searchInfoCharacter = data.filter((item) => (item.name === event.target[3].value));
        const infoAdventure =
        {
            'id': searchInfoCharacter[0].id,
            'adventureName': event.target[0].value,
            'origin': event.target[1].value,
            'destination': event.target[2].value,
            'characterName': searchInfoCharacter[0].name,
            'characterRace': searchInfoCharacter[0].race
        }
        setAdventures([ ...adventure, infoAdventure ]);
    }

    useEffect(() => {
        localStorage.setItem('CHARACTERS', JSON.stringify(adventure));
        let dataFilter = JSON.parse(localStorage.getItem('CHARACTERS'));
        setCharacterFilter(dataFilter);
    }, [ adventure ]);

    return (
        <div className='content-action-add'>
            <button type='button' className='hs-dropdown-toggle w-40 h-9 px-1 py-5 inline-flex justify-center items-center rounded-md text-base' data-hs-offcanvas='#hs-offcanvas-right'>
                <p className='new-adventure font-semibold'>New adventure</p>
            </button>
            <div id='hs-offcanvas-right' className='hs-offcanvas hs-offcanvas-open:translate-x-0 translate-x-full fixed top-0 right-0 transition-all duration-300 transform p-7 max-w-md w-full h-full rounded-l-2xl z-[60] bg-white border-l dark:bg-gray-800 dark:border-gray-700' tabIndex='-1'>
                <div className='title-form py-4 flex justify-between h-fit'>
                <p className='font-semibold'>New Adventure</p>
                <button type='button' className='hs-dropdown-toggle' data-hs-offcanvas="#hs-offcanvas-right">
                    <img className='h-5' src={iconClose} alt="icon-close" />
                </button>
                </div>
                <form onSubmit={ createNewAdventure } className='flex flex-col justify-between h-5/6'>
                <div className='container-form'>
                    <h4 className='info-item-gray text-lg leading-7 font-semibold my-5'>About Adventure</h4>
                    <label className='content-title text-sm' htmlFor="adventureName">
                    Adventure Name
                    <input type="text" name="adventure-name" id="adventureName" className='w-full form-input h-12 rounded-lg' />
                    </label>
                    <div className='flex items-center gap-5 ml-5 my-3'>
                    <img className='h-24 mt-4' src={iconConect} alt="icon-conect" />
                    <div className='flex flex-col gap-5'>
                        <label className='text-sm text-black' htmlFor="adventureOrigin">
                        Origin
                        <input type='text' name="adventure-origin" id='adventureOrigin' className='content-title h-12 form-input rounded-lg mt-1' />
                        </label>
                        <label className='name-input text-sm' htmlFor="adventureDestination">
                        Destination
                        <input type='text' name='adventure-destination' id='adventureDestination' className='content-title form-input text-base h-12 rounded-lg mt-1 focus:outline-none' />
                        </label>
                    </div>
                    </div>
                    <h4 className='info-item-gray text-lg leading-7 font-semibold my-5'>Who is the Character</h4>
                    <p className='text-sm text-black'>Character</p>
                    <FormCombobox
                        data={ data }
                        selectedCharacter={ selectedCharacter }
                        setSelectedCharacter={ setSelectedCharacter }
                        query={ query } setQuery={ setQuery }
                    />
                </div>
                <button type="submit" className='button-create h-10'>Create</button>
                </form>
            </div>
        </div>
    )
}
