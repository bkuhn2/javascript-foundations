class SkatePark {
  constructor(skatePark) {
    this.name = skatePark.name;
    this.yearFounded = skatePark.year;
    this.style = skatePark.type;
    this.features = skatePark.features;
    if (skatePark.isPrivate === undefined) {
      this.isPrivate = false;
    } else {
      this.isPrivate = skatePark.isPrivate;
    }
    if (skatePark.price === undefined) {
      this.cost = 0;
    } else {
      this.cost = skatePark.price;
    }
    this.occupants = [];
  }
  admit(skater) {
    if (this.occupants.length >= 3) {
      return 'Sorry, we are at max capacity. Thank you for understanding.';
    } else if (!this.isPrivate) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`
    } else if (this.isPrivate && skater.money - this.cost >= 0) {
      skater.money = skater.money - this.cost;
      this.occupants.push(skater);
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    } else {
      return `Sorry, you don't have enough money.`
    }
  }
}

module.exports = SkatePark;
