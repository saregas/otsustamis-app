class Person {
  constructor(name = "Anonüümne", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return "Tere, mina olen " + this.name + "!";
    return `Tere, mina olen ${this.name}!`;
  }
  getDescription() {
    return `${this.name} on ${this.age} aastat vana.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Tema oskus on ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` On pärit ${this.homeLocation}`;
    }

    return greeting;
  }
}

const me = new Traveler("Siim Saar", 29, "Imavere");

console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
