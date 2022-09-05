class Magician {
  constructor(magician){
    this.name = `The Great ${magician.name}`
    this.assistant = magician.assistant
    if (magician.clothing === undefined){
    this.favoriteAccessory = "top hat"
    } else {
    this.favoriteAccessory = magician.clothing
    }
    this.confidencePercentage = 10
  }

  performIncantation(incantation){
    return `${incantation.toUpperCase()}!`
  }

  performTrick(){
    if (this.favoriteAccessory === "top hat" && this.confidencePercentage < 100){
      this.confidencePercentage += 10
      return "PULL RABBIT FROM TOP HAT"
    } else if (this.favoriteAccessory === "top hat"){
      return "PULL RABBIT FROM TOP HAT"
    }

    if (this.confidencePercentage < 100) {
      this.confidencePercentage += 10
      return "PULL DOVE FROM SLEEVE"
    } else {
      return "PULL DOVE FROM SLEEVE"
    }
  }

  performShowStopper(){
    if (this.confidencePercentage < 100) {
      return "Oh no, this trick is not ready!"
    } else if (this.assistant === false) {
      return "Oh no, this trick is not ready!"
    } else {
      return "WOW! The magician totally just sawed that person in half!"
    }
  }
}

module.exports = Magician;
