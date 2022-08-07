import React from 'react'
import { Combobox } from '@headlessui/react'
import iconArrow from '../assets/Up arrow.svg'

export const FormCombobox = ({ selectedCharacter, setSelectedCharacter, query, setQuery, data }) => {

    const filteredCharacter =
        query === ''
            ? data
            : data.filter((character) => {
                return character.name.toLowerCase().includes(query.toLowerCase())
        })

    return (
        <Combobox value={selectedCharacter} onChange={setSelectedCharacter}>
            <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left focus:outline-none">
                <Combobox.Input
                    className="w-full h-12 py-2 pl-3 pr-10 rounded-lg content-title text-base form-input"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(character) => character.name}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 pr-2">
                    <img className='w-5' src={iconArrow} alt="arrow-icon" />
                </Combobox.Button>
            </div>
            <Combobox.Options className='options-character rounded-lg py-4 px-5 my-3 h-48'>
                {
                    filteredCharacter.map((character) => (
                        <Combobox.Option
                            key={ character.id }
                            value={ character }
                            className='my-1 cursor-pointer option-character p-1 rounded'
                            >
                            <div>
                            <p className='info-item-dark text-base font-medium'>{ character.name }</p>
                            <p className='info-item-gray text-xs'> { character.race}</p>
                            </div>
                        </Combobox.Option>
                    ))
                }
            </Combobox.Options>
        </Combobox>
    )
}
