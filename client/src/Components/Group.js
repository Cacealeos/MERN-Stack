// JavaScript source code
import React from 'react'
//import { useState } from 'react'

const Group = ({ Enabled, Name, Entries, Remove }) => {

    if(Enabled)
        return (
            <>
                <h1>{Name}</h1>
                {Entries.map(E => {
                    return <h2><button key={E.ID} onClick={() => Remove(E.Group, E.ID, E.Team)} className="remove-entry">X</button>{E.Name}</h2>
                })}
            </>
        )
    else 
        return  <h1></h1>
    }
    
export default Group