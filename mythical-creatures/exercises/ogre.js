class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    if (ogre.abode === undefined) {
      this.home = 'Swamp';
    } else {
      this.home = ogre.abode;
    }
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter ++
    if (human.noticesOgre() === true) {
      this.swingAt();
    }
    if (this.swings === 2) {
      human.knockedOut = true;
    }
  }
  swingAt(human) {
    this.swings ++
  }
  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
