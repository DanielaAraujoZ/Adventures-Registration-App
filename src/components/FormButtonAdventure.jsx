import React from 'react'
import iconClose from '../assets/Close.svg'

export const FormButtonAdventure = () => {
    return (
        <div className='title-form py-4 flex justify-between h-fit'>
            <p className='font-semibold'>New Adventure</p>
            <button type='button' className='hs-dropdown-toggle' data-hs-offcanvas="#hs-offcanvas-right">
                <img className='h-5' src={ iconClose } alt="icon-close" />
            </button>
        </div>
    )
}
