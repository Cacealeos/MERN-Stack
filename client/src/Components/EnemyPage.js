// JavaScript source code
import React from 'react'
import { useState } from 'react'

const EnemyPage = ({ Unit, STY, ReArrange, Position }) => {

    const [usePage, setPage] = useState('Stats');

    return (
        <>
            <div style={STY} onClick={() => ReArrange(Position)}>
                <button onClick={() => setPage('Stats')}>Stats</button>
                <button onClick={() => setPage('Flavor')}>Flavor</button>
                <button onClick={() => setPage('Info')}>Info</button>
                <button onClick={() => setPage('Attacks')}>Attacks</button>
                <button onClick={() => setPage('Abilities')}>Abilities</button>
                <label className='enemybox-label'>{Unit.Name}</label>
                {usePage === "Stats" && <table className='unitStats'>
                    <tbody>
                        <tr>
                            <td>Power: </td><td>{Unit.Power}</td>
                            <td>Endurance: </td><td>{Unit.Endurance}</td>
                            <td>Speed: </td><td>{Unit.Speed}</td>
                            <td>Flight: </td><td>{Unit.Flight}</td>
                        </tr>
                        <tr>
                            {Unit.Manna &&
                                <td>Manna: {Unit.Manna}</td>
                            }
                            {Unit.Vit &&
                                <td>Vit: {Unit.Vit}</td>
                            }
                            {Unit['Life-Force'] &&
                                <td>Life-Force: {Unit['Life-Force']}</td>
                            }
                            {Unit.Spirit &&
                                <td>Spirit: {Unit.Spirit}</td>
                            }
                        </tr>
                    </tbody>
                </table>}
                {usePage === "Flavor" && <label>{Unit.Flavor}</label>}
                {usePage === "info" && <label>{Unit.Flavor}</label>}
                {usePage === "Attacks" && <table className='unitStats'>
                    <tbody>
                        {Unit.Attacks.map(A => {
                            return (
                                <>
                            <tr><label>{A.Name}</label></tr>
                            <tr>
                                {A.Base && 
                                    <td>Base: {A.Base}</td>
                                }
                                {A.Positive &&
                                    <td>Positive Scaling: {A.Positive}</td>
                                }
                                {A.Negative &&
                                    <td>Negative Scaling: {A.Negative}</td>
                                }
                                {A.Info &&
                                    <td>Info: {A.Info}</td>
                                }
                            </tr>
                                </>
                                )
                        })}
                    </tbody>
                </table>}
                {usePage === "Abilities" && <table className='unitStats'>
                    <tbody>
                        {Unit.Abilities.map(A => {
                            return (
                                <>
                                    <tr><label>{A.Name}</label></tr>
                                    <tr>
                                        {A.Info &&
                                            <td>Info: {A.Info}</td>
                                        }
                                    </tr>
                                </>
                                    )
                        })}
                    </tbody>
                </table>}
                
            </div>
            
        </>
    )
}
export default EnemyPage