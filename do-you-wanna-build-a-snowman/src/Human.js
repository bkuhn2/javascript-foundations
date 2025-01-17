var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }

  gatherMaterials(material, amount) {
    this.materials[material] += amount;
  }

  buildASnowman() {
    var snowman = new Snowman(this.materials);
    return snowman;
  }
}

module.exports = Human;
