let myMap = new Map([[function a(){console.log(this[1])}, 1], [function b(){console.log(this[1])}, 2], [function c(){console.log(this[1])}, 3]]);

for (let entry of myMap) {
  entry[0]()
  console.log(entry)
}

for (let [key, value] of myMap) {
  key()
  console.log(key)
  console.log(value);
}
