import React from 'react'
import Team from './Team'

//Helpers
const RED_TEAM = 0
const BLUE_TEAM = 1


export default class Game {
    constructor(props) {
        this.redTeam = props.redTeam
        this.blueTeam = props.blueTeam
        this.winTeam = null
    }

    run() {
        // fight
        while (this.redTeam.isAlive() && this.blueTeam.isAlive()) {
            console.log('team fight -');
            this.blueTeam.aliveChampions().forEach((champ) => {
                champ.punch(this.redTeam.aliveChampions()[0])
            });
            this.redTeam.aliveChampions().forEach((champ) => {
                champ.punch(this.blueTeam.aliveChampions()[0])
            });
        }
        // result
        if (this.redTeam.isAlive()) {
            console.log('RED team WIN')
            this.winTeam = this.redTeam
        } else {
            console.log('BLUE team WIN')
            this.winTeam = this.blueTeam
        }
    }

    result() {
        return (
            <div>
                {this.winTeam && this.winTeam.render()}
            </div>
        )
    }
}

