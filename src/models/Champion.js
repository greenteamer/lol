import React from 'react'


export default class Champion {

  constructor(props) {
      console.log('props: ', props)
      this.level = props.level || 1;
      this.helth = this.level * 10;
      this.force = this.level * 1;
      this.name = props.name || 'unknown champ'
      this.imageUrl = props.imageUrl || ''
      this.view = <img src={this.imageUrl} />
  }

  punch(champ) {
      // champ.helth = champ.helth - this.force - minion.forse;
      champ.helth = champ.helth - this.force
  }

  isAlive() {
      if (this.helth > 0) return true
      return false
  }

}
