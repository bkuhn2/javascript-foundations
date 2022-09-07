const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(stark) {
    this.name = stark.name;
    if (stark.area === undefined) {
      this.location = 'Winterfell';
    } else {
      this.location = stark.area;
    }
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe === false) {
      return 'Winter is Coming'
    } else {
      return 'The North Remembers'
    }
  }

  callDirewolf(name, location) {
    var direwolf = new Direwolf(name, this.location)
    direwolf.protect(this)
    return direwolf
  }

}

module.exports = Stark;
