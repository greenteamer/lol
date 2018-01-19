export class Team{
  constructor(props)
    this.team = props.team
}

export class Champion {

  constructor(props) {
      console.log('props: ', props)
      this.level = props.level || 1;
      this.helth = this.level * 10;
      this.force = this.level * 1;
      this.name = props.name || 'unknown champ'
      this.imageUrl = props.imageUrl || ''
  }

  punch(champ) {
      // champ.helth = champ.helth - this.force - minion.forse;
      champ.helth = champ.helth - this.force

      if (!champ.isAlive()) {

          // winner
          var img = document.createElement("img");
          img.src = this.imageUrl;
          var src = document.getElementById("root");
          src.appendChild(img);
          
          // result
          console.log(this.name, ': Yahoo, I am win... gg, \n I have ', this.helth, ' HP');
          console.log(champ.name, ': Oops, I am loh..., \n I have ', champ.helth, ' HP');

      }
  }

  isAlive() {
      if (this.helth > 0) return true
      return false
  }

}


export class Minion {
 
  constructor(props) {
    console.log('props', props)
    this.level = props.level || 1
    this.helth = this.level * 10
    this.force = this.level * 0.5
    this.team = props.team
    this.imageUrl = props.imageUrl || ''
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

