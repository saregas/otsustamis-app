const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

const user = {
  name: "Siim",
  cities: ["Tallinn", "Imavere", "Türi"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " on elanud " + city);
  }
};
console.log(user.printPlacesLived());

//

const multi = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multi.multiply());
