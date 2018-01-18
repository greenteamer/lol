// определим классы
class Champion {

    constructor(props) {
        console.log('props: ', props)
        this.level = props.level || 1;
        this.helth = this.level * 10;
        this.force = this.level * 1;
        this.name = props.name || 'unknown champ'
        this.imageUrl = props.imageUrl || ''
    }

    punch(champ) {
        champ.helth = champ.helth - this.force;
        const isIAmWin = champ.isAlive()
        if (!isIAmWin) {

            // winner
            var img = document.createElement("img");
            img.src = this.imageUrl;
            var src = document.getElementById("root");
            src.appendChild(img);
            
            // result
            console.log(this.name, ': Yahoo, I am win... gg, \n I have ', this.helth, ' HP');
            console.log(champ.name, ': Oops, I am died..., \n I have ', champ.helth, ' HP');
        }
    }

    isAlive() {
        if (this.helth > 0) return true
        return false
    }

}

const kain = new Champion({level: 5, name: 'Kain', imageUrl: './kayn.jpg'});
const hekarim = new Champion({level: 4, name: 'Hekarim', imageUrl: './heka.jpeg'});

console.log('heka helth: ', hekarim.helth);
console.log('kain helth: ', kain.helth);

while (kain.isAlive() && hekarim.isAlive()) {
    console.log('took on youre head');
    hekarim.punch(kain);
    if (kain.isAlive()) {
        kain.punch(hekarim);
    }
}
