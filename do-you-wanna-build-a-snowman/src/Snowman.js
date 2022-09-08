class Snowman {
  constructor (snowmanDetails) {
    this.carrots = snowmanDetails.carrots;
    this.coal = snowmanDetails.coal;
    this.buttons = snowmanDetails.buttons;
    this.snowballs = snowmanDetails.snowballs;
    this.magicHat = false;
  }

  canWearMagicHat() {
    if (this.coal >= 2 && this.buttons >= 5 && this.carrots > 0 && this.snowballs >=2) {
    this.magicHat = true;
  }
  }
}

module.exports = Snowman;
