class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined){
      this.color = "white";
    } else {
    this.color = color;
    }
  }

  isWhite(color){
    if (this.color === "white"){
      return true
    } else {
      return false
    }
  }
  says(speechAct){
    return `**;* ${speechAct} *;**`
  }
}

module.exports = Unicorn;
