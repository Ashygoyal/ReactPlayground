// Spread Operator in Arrays - to split up arrays/ object properties

const oldArray = [1,2,3];

const newArray = [ ...oldArray, 4, 5];

for(x in newArray) {
  console.log(newArray[x]); // 1,2,3,4,5
}

// Spread operator in Objects

const oldObject = {
  name:'Ashish',
  age: 20
}

const newObject = {
  ...oldObject,
  employer: 'Moonraft Innovation Labs'
}

console.log(newObject.name); // Ashish



// Rest Operator - for receiving unknown number of arguments and merging them into an array

function sortArgs (...args) {
  return console.log(args.sort());
}

sortArgs(6,2,8,3,1,9,4); // [1, 2, 3, 4, 6, 8, 9]
sortArgs(55,1,4,0); // [0, 1, 4, 55]