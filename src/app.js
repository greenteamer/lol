import React from 'react'
import { Champion, Minion } from './models'


const kain = new Champion({level: 7, name: 'Kain', imageUrl: './src/img/kayn.jpg'});
const hekarim = new Champion({level: 8, name: 'Hekarim', imageUrl: './src/img/heka.jpeg'});
const minionRed = new Minion({level: 2, team: 'Minion red', imageUrl: './src/img/minionred.png'});
const minionBlue = new Minion({level: 2, team:'Minion blue', imageUrl: './src/img/minionblue.jpg'})
console.log('heka helth: ', hekarim.helth);
console.log('kain helth: ', kain.helth);


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
        {kain.view}
    </div>
)

export default App
