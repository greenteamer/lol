import React from 'react'
import { Champion, Minion, Team } from './models'


//Helpers
const RED_TEAM = 0
const BLUE_TEAM = 1

//Create team
const redTeam = new Team({team: RED_TEAM})
const blueTeam = new Team({team: BLUE_TEAM})

//Create champion
const kain = new Champion({level: 7, name: 'Kain', imageUrl: './src/img/kayn.jpg' ,team: blueTeam});
const hekarim = new Champion({level: 8, name: 'Hekarim', imageUrl: './src/img/heka.jpeg', team: redTeam});

//Create minions
const minionRed = new Minion({level: 2, team: 'Minion red', imageUrl: './src/img/minionred.png', team: redTeam});
const minionBlue = new Minion({level: 2, team:'Minion blue', imageUrl: './src/img/minionblue.jpg', team: blueTeam})

//Console
console.log('heka helth: ', hekarim.helth);
console.log('kain helth: ', kain.helth);

//Methods
while (kain.isAlive() && hekarim.isAlive()) {
    console.log('took on youre head');
    hekarim.punch(kain);
    minionRed.punch(kain)
    if (kain.isAlive()) {
        kain.punch(hekarim);
        minionRed.punch(hekarim)
    }
}


const App = () => (
    <div>
        {teamWin.view}
    </div>
)

export default App
