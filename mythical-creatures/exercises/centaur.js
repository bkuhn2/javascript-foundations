class Centaur {
  constructor(centaurObject) {
    this.name = centaurObject.name;
    this.breed = centaurObject.type;
    this.standing = true;
    this.layingDown = false;
    this.athleticCount = 0;
    this.cranky = false;
  }

  shootBow() {
    if (this.standing === false) {
      return 'NO!'
    }
    if (this.cranky === false) {
      this.athleticCount++
    }
    if (this.athleticCount >= 3) {
      this.cranky = true;
      return 'NO!'
    }
    return 'Twang!!!'
  }

  run() {
    if (this.standing === false) {
      return 'NO!'
    }
    if (this.cranky === false) {
      this.athleticCount++
    }
    if (this.athleticCount >= 3) {
      this.cranky = true;
      return 'NO!'
    }
    return 'Clop clop clop clop!!!'
  }

  sleep() {
    if (this.standing === true) {
      return 'NO!'
    }
  }

  layDown() {
    if (this.standing === true) {
      this.standing = false;
      this.layingDown = true;
    }
  }

  standUp() {
    if (this.standing === false) {
      this.standing = true;
      this.layingDown = false;
    }
  }

}

module.exports = Centaur
