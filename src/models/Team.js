import React from 'react'
import { RED_TEAM, BLUE_TEAM } from '../constants'


export default class Team {
  constructor(props) {
    this.team = props.team
    this.champions = props.champions
    this.winImg = props.winImg
  }

  isAlive() {
    let aliveChamp = 0
    // цикл по всем чемпионам (если чемп жив то плюсуем в aliveChamp)
    this.champions.forEach(champ => {
      if (champ.isAlive()) {
        aliveChamp++
      }
    });
    // если все чемпионы мертвы возвращаем false
    return aliveChamp !== 0
  }

  aliveChampions() {
    const arr = this.champions.filter((champ) => {
      return champ.isAlive()
    })
    console.log('aliveChampions: ', arr)
    return arr
  }

  render() {
    return (
      <div>
        <img src={this.winImg} />
      </div>
    )
  }

}
