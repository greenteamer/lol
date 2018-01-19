import React from 'react'
import { Champion, Minion, Team, Game } from './models'


//Helpers
const RED_TEAM = 0
const BLUE_TEAM = 1

//Create champion
const kain = new Champion({level: 7, name: 'Kain', imageUrl: './src/img/kayn.jpg'});
const ash = new Champion({level: 8, name: 'Ash', imageUrl: './src/img/ash.png'});
const dovabon = new Champion({level: 7, name: 'Dovabon', imageUrl: './src/img/dovabon.png'});

const hekarim = new Champion({level: 8, name: 'Hekarim', imageUrl: './src/img/heka.jpeg'});
const jhin = new Champion({level: 7, name: 'Jhin', imageUrl: './src/img/jhin.jpg'});


//Create team
const redTeam = new Team({team: RED_TEAM, champions: [ hekarim, jhin ]})
const blueTeam = new Team({team: BLUE_TEAM, champions: [ kain, ash, dovabon ]})


// Create Game
const game = new Game({ redTeam, blueTeam })
game.run()


const App = () => (
    <div>
        {game.result()}
    </div>
)

export default App
