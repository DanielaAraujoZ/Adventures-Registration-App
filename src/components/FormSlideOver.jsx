import React from 'react'
import { useState } from 'react';
import { FormAdventures } from './FormAdventures';
import { FormButtonAdventure } from './FormButtonAdventure';

export const FormSlideOver = (
    {
        data,
        adventure,
        setAdventures,
        setCharacterFilter
    }) => {

    const [selectedCharacter, setSelectedCharacter] = useState('');
    const [query, setQuery] = useState('');
    const [successForm, setSuccessForm] = useState(false);

    return (
        <div>
            <button type='button' className='button-create hs-dropdown-toggle w-40 h-9 px-1 py-5 inline-flex justify-center items-center rounded-md text-base' data-hs-offcanvas='#hs-offcanvas-right'>
                <p className='new-adventure font-semibold'>New adventure</p>
            </button>
            <div id='hs-offcanvas-right' className='hs-offcanvas hs-offcanvas-open:translate-x-0 translate-x-full fixed top-0 right-0 transition-all duration-300 transform p-7 max-w-md w-full h-full rounded-l-2xl z-[60] bg-white border-l dark:bg-gray-800 dark:border-gray-700' tabIndex='-1'>
                {
                    successForm
                    ?
                    <div className="bg-green-50 border border-green-200 text-sm text-green-600 rounded-md p-4" role="alert">
                        <span className="font-bold">Success!</span>
                        <p> Your adventure has been saved! </p>
                    </div>
                    : <></>
                }
                <FormButtonAdventure />
                <FormAdventures
                    data={ data }
                    selectedCharacter={ selectedCharacter }
                    setSelectedCharacter={ setSelectedCharacter }
                    query={ query }
                    setQuery={ setQuery }
                    adventure={ adventure }
                    setAdventures={ setAdventures }
                    setCharacterFilter={ setCharacterFilter }
                    setSuccessForm={ setSuccessForm }
                />
            </div>
        </div>
    )
}
