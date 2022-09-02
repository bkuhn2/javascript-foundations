class Hobbit {
  constructor(nameKey) {
    this.name = nameKey.name
    this.age = 0
    this.old = false
    this.hasRing = false
  }

  celebrateBirthday(){
    this.age++

    if (this.age < 33){
      this.adult = false
    } else {
      this.adult = true
    }

    if (this.age > 100){
      this.old = true
    } else {
      this.old = false
    }
  }

  getRing(){
    if (this.name === 'Frodo'){
      this.hasRing = true
      return 'Here is the ring!'
    }
    if (this.name !== 'Frodo'){
      return'You can\'t have it!'
    }
    }

}


module.exports = Hobbit
