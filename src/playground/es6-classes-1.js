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

const me = new Student("Siim Saar", 29, "Arvuti teadus");

console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());
