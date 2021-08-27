// JavaScript source code
import React from 'react'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useSelector } from 'react-redux'
import BItem from './BestiaryItem'

const Bestiary = ({ Click, AddtoGroup, cSS, Groups, Team }) => {
    
    const Data = useSelector((state) => state.Entries)
    console.log(Data)

    const [active, setActive] = useState('')
    const [entryHeight, setHeight] = useState(null)

    function calcHeight(P) {
        const height = P.offsetHeight;
        setHeight(height);
    }

    //function AGClick(Item, Name, Team) {
    //    AddGroup(Item, Name, Team)
    //}
    
    return (
        Data.map(Item => {
        return (
            <>
                <button className="item-button" onClick={() => { (active === Item.Name) ? setActive('') : setActive(Item.Name) }}>{Item.Name}</button>
                
                <CSSTransition in={active === Item.Name} unmountOnExit timeout={300} classNames={cSS} onEnter={calcHeight} >
                <div >
                    <BItem Data={Item.Flavor} Heading='Flavor: ' />
                    <b >Abilities</b>
                    {Item.Abilities.map(Ability => {
                        return <BItem Data={Ability.Name} />
                    })}
                    <b >Attacks</b>
                    {Item.Attacks.map(Attack => {
                        return <BItem Data={Attack.Name} />
                    })}

                    <b >Stats</b>
                    <BItem Data={Item.Power} Heading='Power: ' />
                        {Groups.map(G => {
                            return <button onClick={() => AddtoGroup(Item, G.Name, Team) }>Add to Group {G.Name}</button>
                        })}
                        
                </div>
                </CSSTransition>
            </>
        )})
    )
}
    export default Bestiary
    
