class Centaur {
  constructor(centaurObject) {
    this.name = centaurObject.name;
    this.breed = centaurObject.type;
    this.standing = true;
    this.athleticCount = 0;
    this.cranky = false;
  }

  shootBow() {
    this.athleticCount++
    if (this.athleticCount >= 3) {
      this.cranky = true;
    }
    return 'Twang!!!'
  }
  run() {
    this.athleticCount++
    if (this.athleticCount >= 3) {
      this.cranky = true;
    }
    return 'Clop clop clop clop!!!'
  }

}

module.exports = Centaur
