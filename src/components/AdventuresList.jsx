import React from 'react'
import imageAdventure from '../assets/placeholder.png'
import iconConect from '../assets/Conect.svg'

export const AdventuresList = ({ id, adventureName, characterName, characterRace, origin, destination }) => {
    return (
        <div className='w-full' key={ id }>
            <div className='content-item flex items-center py-5 pl-4 gap-5 rounded-lg'>
                <img className='w-20 h-20 rounded-2xl' src={ imageAdventure } alt='image-adventure' />
                <div className='flex flex-col gap-2'>
                <p className='adventure-name text-lg font-medium'>{ adventureName }</p>
                <div className='flex gap-24'>
                    <div className='w-fit'>
                    <p className='text-lg info-item-dark'>{ characterName }</p>
                    <p className='text-sm info-item-gray'>{ characterRace }</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                    <img className='h-8' src={ iconConect } alt='icon-contect' />
                    <div className='flex flex-col'>
                        <p className='text-sm info-item-gray'>Origin  <span className='text-base info-item-dark'> { origin } </span></p>
                        <p className='text-sm info-item-gray'>Destination <span className='text-base info-item-dark'> { destination } </span> </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
