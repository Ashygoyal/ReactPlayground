// Array Functions

// MAP accepts a function as an argument and that
// function runs on each element of the array

const numArray = [1,2,3,4];

const doubleNumArray = numArray.map((num)=> {
  return num*2;
});

console.log(doubleNumArray); // [2, 4, 6, 8]

//----------------FIND function below-----------------
// FIND returns the first element of array that matches
// the criteria mentioned in the testing function

const findNumArray = numArray.find((num)=>{
  return num > 3;
});

console.log(findNumArray);

//----------------FindIndex function below-----------------
// FindIndex returns the index of first element of array that matches
// the criteria mentioned in the testing function

const findNumArrayIndex = numArray.findIndex((num)=>{
  return num > 3;
});

console.log(findNumArrayIndex);

//-----------FILTER function below------------
//The filter() method creates a new array with all 
// elements that pass the test implemented by the provided function.

const filterNumArray = numArray.filter((num)=>{
  return num >= 3;
});

console.log(filterNumArray); //[3, 4]

//------------CONCAT function below------------
// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.

const arr1 = ['a','b'];
const arr2 = ['c','d'];
console.log(arr1.concat(arr2)); //["a", "b", "c", "d"]























