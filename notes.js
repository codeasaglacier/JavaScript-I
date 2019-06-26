// Notes.js
// Using .forEach
const newArray = [];
originalArray.forEach(nameForArrayObjects => {
  console.log(nameForArrayObjects);
  newArray.push(`Some words ${nameForArrayObjects.arrayKey}, more words ${nameForArrayObjects.anotherKey}`)
})
console.log(newArray);
// 
// Using .map
