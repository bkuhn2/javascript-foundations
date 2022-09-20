class Roadrace {
  constructor(race) {
    this.name = race.title;
    this.location = race.city;
    this.participants = [];
  }
  setDistance(length) {
    this.distance = length;
    return `The ${this.name} in ${this.location} is a ${length} mile race.`
  }
  registerParticipants(runner) {
    this.participants.push(runner);
  }
  completeRace() {
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].runRace(this.name, this.distance);
    }
  }
}

module.exports = Roadrace;
