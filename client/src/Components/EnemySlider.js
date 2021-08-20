import React from 'react'
import EnemyPage from './EnemyPage'
import { useState } from 'react'

const EnemySlider = ({ Group }) => {

    
    const [eList, seteList] = useState([])
    const [orList, setorList] = useState([])
    const styleTemplate = {
        backgroundColor: 'darkslategray',
        top: 0,
        left: 0,
        zIndex: 0,
        position: 'absolute',
        borderStyle: 'solid',
        width: '100%',
        padding: '5px'
    }
    let order = -1;
    Arrange();
    
    function addLayer() {
        styleTemplate.left += 30;
        styleTemplate.top += 50;
        styleTemplate.zIndex += 5;
    }

    function Arrange() {

        if (eList.length !== Group.Enemies.length && Group.Enemies.length > 0) {
            //let style = Object.assign({}, styleTemplate)
            let group = [];
            var zero = false;
            Group.Enemies.forEach(E => {
                if(zero)
                    addLayer()
                zero = true
                group.push(Object.assign({}, styleTemplate))
            })
            seteList(group.filter(group => typeof group !== "undefined"))
            setorList(group.filter(group => typeof group !== "undefined"))
        }
    }

    function reArrange(place) {
        // indicates which enemypage was selected and is identical to where in the Group.Enemies array it exists
        if (typeof place==="undefined")
            return
        let newlist = [];
        var enemyPl = 0; //fills eList for every element except "place"
        newlist.length = eList.length;

        for (var count1 = 0; count1 < (orList.length - 1); ++count1) {
            if (enemyPl === place) {
                newlist[place] = orList[orList.length - 1];// assigns the last style object in orList to move the selected enemyPage to the front
                enemyPl +=1
            }
            newlist[enemyPl] = orList[count1];
            ++enemyPl;
        }
        //if eList realigns itself perfectly, then enemyPl won't be assigned a the style object place which will always logically be the last element in orList
        if (typeof newlist[eList.length - 1] === "undefined")
            newlist[eList.length - 1] = orList[orList.length - 1]
        seteList(newlist);
    }

    return (
        <>
            <div className='enemybox'>
                {Group.Enemies.map(E => {
                    ++order;
                    return <EnemyPage Position={order} Unit={E} STY={eList[order]} ReArrange={reArrange} />
                })}
            </div>
        </>
        )
}

export default EnemySlider