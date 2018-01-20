import React from 'react'
import { Champion, Minion, Team, Game } from './models'
import { RED_TEAM, BLUE_TEAM } from './constants'


//Create champion
const greene = new Champion({level: 8, nsme: 'Greene', imageUrl: './src/img/greene.jpg'})
const kain = new Champion({level: 7, name: 'Kain', imageUrl: './src/img/kayn.jpg'});
const ash = new Champion({level: 8, name: 'Ash', imageUrl: './src/img/ash.png'});
const dovabon = new Champion({level: 7, name: 'Dovabon', imageUrl: './src/img/dovabon.png'});
const hekarim = new Champion({level: 8, name: 'Hekarim', imageUrl: './src/img/heka.jpeg'});
const jhin = new Champion({level: 7, name: 'Jhin', imageUrl: './src/img/jhin.jpg'});


//Create red team
const redTeam = new Team({
    team: RED_TEAM,
    champions: [ hekarim, jhin ],
    winImg: './src/img/reddefeat.jpg'
})
//Create blue team
const blueTeam = new Team({
    team: BLUE_TEAM,
    champions: [ kain, ash, dovabon ],
    winImg: './src/img/bluedefeat.png'
})


// Create Game
const game = new Game({ redTeam, blueTeam })
game.run()


const App = () => (
    <div>
        <button onClick={() => game.run()}>start game</button>
        {game.result()}
    </div>
)

export default App
