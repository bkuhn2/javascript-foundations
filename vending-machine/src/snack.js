class Snack {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.itemsInStock = 0;
  }
  stockItems(items) {
    this.itemsInStock += items;
  }
  removeItem() {
    if (this.itemsInStock > 0) {
      this.itemsInStock --;
      return `Item taken! There are now ${this.itemsInStock} items left.`
    } else {
      return `Sorry, no ${this.name} left in stock!`
    }
  }
}

module.exports = Snack;
