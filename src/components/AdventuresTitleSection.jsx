import React from 'react'
import { DropdownListItems } from './DropdownListItems'
import { FormSlideOver } from './FormSlideOver'

export const AdventuresTitleSection = ({ data, adventure, setAdventures,characterFilter, setCharacterFilter }) => {
    return (
        <div className='content-title flex flex-col gap-9'>
            <p className='text-xl font-semibold'>Hi, User</p>
            <div className='content-actions flex justify-between h-9'>
                <DropdownListItems characterFilter={ characterFilter }/>
                <FormSlideOver
                    data={ data }
                    adventure={ adventure }
                    setAdventures={ setAdventures }
                    setCharacterFilter={ setCharacterFilter }
                />
            </div>
        </div>
    )
}
