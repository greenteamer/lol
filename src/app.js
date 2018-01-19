import React from 'react'
import { Champion, Minion, Team, Game } from './models'


//Helpers
const RED_TEAM = 0
const BLUE_TEAM = 1

//Create champion
const kain = new Champion({level: 7, name: 'Kain', imageUrl: './src/img/kayn.jpg'});
const ash = new Champion({level: 8, name: 'Ash', imageUrl: './src/img/ash.png'});

const hekarim = new Champion({level: 8, name: 'Hekarim', imageUrl: './src/img/heka.jpeg'});
const jhin = new Champion({level: 7, name: 'Jhin', imageUrl: './src/img/jhin.jpg'});


//Create team
const redTeam = new Team({team: RED_TEAM, champions: [ hekarim, jhin ]})
const blueTeam = new Team({team: BLUE_TEAM, champions: [ kain, ash ]})


// Create Game
const game = new Game({ redTeam, blueTeam })
game.run()

//Create minions
// const minionRed = new Minion({level: 2, team: 'Minion red', imageUrl: './src/img/minionred.png', team: redTeam});
// const minionBlue = new Minion({level: 2, team:'Minion blue', imageUrl: './src/img/minionblue.jpg', team: blueTeam})

//Console
// console.log('heka helth: ', hekarim.helth);
// console.log('kain helth: ', kain.helth);

//Methods
// while (kain.isAlive() && hekarim.isAlive()) {
//     console.log('took on youre head');
//     hekarim.punch(kain);
//     minionRed.punch(kain)
//     if (kain.isAlive()) {
//         kain.punch(hekarim);
//         minionRed.punch(hekarim)
//     }
// }


const App = () => (
    <div>
    </div>
)

export default App
