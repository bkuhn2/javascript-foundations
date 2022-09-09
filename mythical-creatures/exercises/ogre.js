class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    if (ogre.abode === undefined) {
      this.home = 'Swamp';
    } else {
      this.home = ogre.abode;
    }
  }
  encounter(human) {
    human.encounterCounter ++
  }
}

module.exports = Ogre;
