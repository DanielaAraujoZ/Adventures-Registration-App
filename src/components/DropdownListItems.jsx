import React from 'react'
import { ListFilterCharacter } from './ListFilterCharacter'
import { ListFilterButton } from './ListFilterButton'

export const DropdownListItems = ({ characterFilter }) => {
    return (
        <div className='content-action-filter hs-dropdown relative inline-flex h-9'>
            <ListFilterButton />
            <div className='hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-64 hidden z-10 p-5 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700' aria-labelledby='hs-dropdown-filter'>
                { characterFilter.length === 0
                    ? <p className='text-center font-medium'> No characters. <br/> <span className='font-normal'> Create an adventure </span> </p>
                    : characterFilter.map((item) => (
                        <ListFilterCharacter { ...item }/>
                    ))
                }
            </div>
        </div>
    )
}
