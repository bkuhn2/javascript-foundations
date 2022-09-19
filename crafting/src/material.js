class Material {
  constructor(type, price, amount, units) {
    this.name = type;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }
  useMaterial(number) {
    if (this.amount - number >= 0 ) {
      this.amount = this.amount - number;
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`
    } else {
      return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    }
  }
  calculateMaterialCost() {
    return this.price * this.amount;
  }
}

module.exports = Material;
