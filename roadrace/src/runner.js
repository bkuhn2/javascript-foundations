class Runner {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }
  runSomeMiles(miles) {
    this.milesRun += miles;
    this.fitness += miles;
  }
  stretch() {
    this.fitness += 0.5;
  }
  runRace(race, length) {
    this.completedRaces.push(race);
    this.runSomeMiles(length);
  }
}

module.exports = Runner;
