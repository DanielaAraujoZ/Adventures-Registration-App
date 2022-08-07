import React from 'react'
import iconFilter from '../assets/Magic filter.svg'
import iconArrow from '../assets/Down arrow.svg'

export const ListFilterButton = () => {
    return (
        <button id='hs-dropdown-filter' type='button' className='w-64 hs-dropdown-toggle inline-flex justify-between items-center rounded-lg border font-medium shadow-sm align-middle px-2 py-1 hover:bg-gray-50 focus:outline-none'>
            <div className='flex items-center gap-1'>
                <img className='h-6' src={ iconFilter } alt='icon-filter' />
                <p className='text-base'>Filter by Character</p>
            </div>
            <img className='hs-dropdown-open:rotate-180 w-4 text-gray-600' src={iconArrow} alt='arrow-filter' />
        </button>
    )
}
