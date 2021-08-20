import React from 'react'
//import { useState } from 'react'
import Group from './Group'
const TeamMenu = ({ AddGroup, setGroup, Remove }) => {

    return (
        <>
            {Object.values(setGroup).map(X => {
                return <Group key={X.Name} Enabled={X.Enabled} Name={X.Name} Entries={X.Enemies} Remove={Remove}/>
            })}

            <button className="item-button" onClick={AddGroup}>Add Group</button>
        </>
    )
}

export default TeamMenu