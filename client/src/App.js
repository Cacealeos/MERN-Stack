import './App.css'
import './grid.css'

import TeamMenu from './Components/TeamMenu'
import Bestiary from './Components/Bestiary'
import EnemySlider from './Components/EnemySlider'
import { useState, useEffect } from 'react'
import { fetchBestiary } from './api/indexAPI'
import { Provider } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getBestiary } from './actions/EntryActions'
//import './scss/grid.scss';
//import Enemies from './bestiaryData'

function App() {
    const dispatch = useDispatch();
    const [EnemyList, setEnemyList] = useState([])
    const [showHomeTeam, setHomeTeam] = useState({
        "A": {
            Name: "A",
            Enabled: false,
            Enemies: []
        },
        "B": {
            Name: "B",
            Enabled: false,
            Enemies: []
        },
        "C": {
            Name: "C",
            Enabled: false,
            Enemies: []
        }
    })
    const [showAwayTeam, setAwayTeam] = useState({
        "A": {
            Name: "A",
            Enabled: false,
            Enemies: []
        },
        "B": {
            Name: "B",
            Enabled: false,
            Enemies: []
        },
        "C": {
            Name: "C",
            Enabled: false,
            Enemies: []
        }
    })
    const [homeRoster, sethomeRoster] = useState(0);
    const [awayRoster, setawayRoster] = useState(0);
    const [entryHeightR, setHeightR] = useState(null);
    const [entryHeightL, setHeightL] = useState(null);
    const [open, setOpen] = useState(false);
    
    
    // async function fetch() {
    //     const derpo = await fetchBestiary
    //     .then(res => {
    //         setEnemyList(res.data)
    //     })
        
    // }
    // useEffect( () => {fetch()}, [])

    useEffect( () => {dispatch(getBestiary())}, [dispatch])
    

    function addGroupEntry(Enemy, gName, Team) {

        let Entry = Object.assign({}, Enemy);

        if (Team === "Home") {
            Entry.ID = homeRoster;
            Entry.Team = Team;
            Entry.Group = gName;
            for (const X in showHomeTeam) {
                if (X === gName)
                    setHomeTeam(prev => ({
                        ...prev,
                        [`${X}`]: { ...prev[`${X}`], Enemies: [...prev[`${X}`].Enemies, Entry] }
                    }));
                //console.log(showHomeTeam[`${X}`].Enemies)
            }
            sethomeRoster(homeRoster + 1)
        }
        if (Team === "Away") {
            Entry.ID = awayRoster;
            Entry.Team = Team;
            Entry.Group = gName;
            for (const X in showAwayTeam) {
                if (X === gName)
                    setAwayTeam(prev => ({
                        ...prev,
                        [`${X}`]: { ...prev[`${X}`], Enemies: [...prev[`${X}`].Enemies, Entry] }
                    }));
                //console.log(showAwayTeam[`${X}`].Enemies)
            }
            setawayRoster(awayRoster + 1)
        }
    }

    function removeGroupEntry(Group, ID, Team) {
        
        if (Team === "Home")
            for (const X in showHomeTeam)
                if(X===Group) {
                    let N = showHomeTeam[Group].Enemies.filter(E => !Object.values(E).includes(ID));
                
                    setHomeTeam(prev => ({
                        ...prev,
                        [X]: { ...prev[X], Enemies: N }
                    }))}
        
        if (Team === "Away")
                for (const X in showAwayTeam)
                    if (X === Group) {
                    let N = showAwayTeam[Group].Enemies.filter(E => !Object.values(E).includes(ID));
                    
                        setAwayTeam(prev => ({
                            ...prev,
                            [X]: { ...prev[X], Enemies: N }
                        }))
                }
        console.log("derpo");
    }

    return (
        <div className="App">
            <div className='App-body1'>
                <TeamMenu
                    AddGroup={() => {
                        for (const X in showHomeTeam) {
                            if (!showHomeTeam[`${X}`].Enabled) {
                                setHomeTeam(prevState => ({
                                    ...prevState,
                                    [`${X}`]: { ...prevState[`${X}`], Enabled: true }
                                }));
                                console.log(X);
                                return
                            }
                        }
                    }}
                    Remove={removeGroupEntry}
                    setGroup={showHomeTeam}
                    removeGroup={false}
                />
                <div className="dropdownL" style={{ height: entryHeightL }}>
                    <Bestiary Data={EnemyList} Roster={homeRoster} AddtoGroup={addGroupEntry} cSS='bEntry-primary' Team='Home' Groups={
                            Object.values(showHomeTeam).filter(group => group.Enabled)
                        } />
                </div>
            </div>

            <div className="GroupSectionA">
                <h1>GA</h1>
                {Object.values(showHomeTeam).map(E => {
                    if (E.Enabled)
                        return <EnemySlider Group={E} />
                    else return
                })}
            </div>

            <div className="GroupSectionB">
                <h1>GB</h1>
                {Object.values(showAwayTeam).map(E => {
                    if (E.Enabled)
                        return <EnemySlider Group={E} />
                    else return
                })}
            </div>

            <div className='App-body2'>
                <TeamMenu
                    AddGroup={() => {
                        for (const X in showAwayTeam) {
                            if (!showAwayTeam[`${X}`].Enabled) {
                                setAwayTeam(prevState => ({
                                    ...prevState,
                                    [`${X}`]: { ...prevState[`${X}`], Enabled: true }
                                }));
                                console.log(X);
                                return
                            }
                        }
                    }}
                    Remove={removeGroupEntry}
                    setGroup={showAwayTeam}
                    removeGroup={false}
                />
                <div className="dropdownR" style={{ height: entryHeightR }}>
                    <Bestiary Data={EnemyList} AddtoGroup={addGroupEntry} Click={() => setOpen(!open)} cSS='bEntry-secondary' Team='Away' Groups={
                        Object.values(showAwayTeam).filter(group => group.Enabled)} />
                </div>
            </div>
            

    </div>
    )
}

export default App;
