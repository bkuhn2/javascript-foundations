var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name){
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim){
    var statue = new Statue(victim.name)

    if (this.statues.length < 3) {
      this.statues.push(statue);
    } else {
      this.statues.push(statue);
      // var freedStatue = this.statues.shift();
      return new Person(this.statues.shift().name, "relieved")
      // return freedPerson
    }
  }
}

module.exports = Medusa
