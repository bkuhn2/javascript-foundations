class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    if (home === undefined) {
    this.home = 'Beyond the Wall';
  } else {
    this.home = home;
  }
    if (size === undefined) {
      this.size = 'Massive';
    } else {
      this.size = size;
    }
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true
  }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }

    leave(stark) {
      for (var i = 0; i < this.starksToProtect.length; i++) {
        if (stark.name === this.starksToProtect[i].name) {
          this.starksToProtect.splice(i, 1);
          stark.safe = false;
        }
      }
    }

}

module.exports = Direwolf;
