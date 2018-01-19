import React from 'react'


export class Minion {
 
  constructor(props) {
    console.log('props', props)
    this.level = props.level || 1
    this.helth = this.level * 10
    this.force = this.level * 0.5
    this.team = props.team
    this.imageUrl = props.imageUrl || ''
    this.view = <img src={this.imageUrl} />
  }
  show() {
    var img = document.createElement("img")
    img.src = this.imageUrl
    var src = document.getElementById("root")
    src.appendChild(img);
  }

  punch(champ){
    champ.helth = champ.helth - this.force;
    console.log(champ.helth)
  }
}

