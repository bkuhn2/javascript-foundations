class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    if (bag === undefined) {
    this.countCandies = 0;
    } else {
    this.countCandies = bag.count;
    }
  }
  putCandyInBag(candy) {
    this.hasCandy = true;
    this.bag.fill(candy);
    this.countCandies = this.bag.count;
  }
  eat() {
    this.bag.candies.splice(0, 1);
    this.bag.count = this.bag.candies.length;
    this.countCandies = this.bag.count;
  }
}

module.exports = TrickOrTreater;
