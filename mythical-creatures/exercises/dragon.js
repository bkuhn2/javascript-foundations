class Dragon {
  constructor(name, riderName){
    this.name = name
    this.rider = riderName
    this.timesEaten = 0
    this.hungry = true
  }
  greet(){
    return `Hi, ${this.rider}!`
  }
  eat(){
    this.timesEaten++
    if (this.timesEaten >= 3){
      this.hungry = false
    }
  }
}


module.exports = Dragon
