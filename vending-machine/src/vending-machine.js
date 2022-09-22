class VendingMachine {
  constructor(machine) {
    this.id = machine.id;
    this.isBroken = machine.isBroken;
    this.snacks = [];
  }
  addSnacks(snack) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snack.name) {
        return 'Sorry, that snack is already stocked! Try adding a different snack.'
      }
    }
    this.snacks.push(snack);
  }
  purchaseSnack(name, money) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === name && this.snacks[i].itemsInStock > 0 && money > this.snacks[i].price) {
        this.snacks[i].removeItem();
        return `Success! Here is $${money - this.snacks[i].price} back!`
      } else if (this.snacks[i].name === name && this.snacks[i].itemsInStock === 0) {
        return 'Sorry, no items in stock. Try another item.';
      } else if (money < this.snacks[i].price) {
        return 'Sorry, not enough payment. Please add more money.'
      }
    }
  }
}

module.exports = VendingMachine;
