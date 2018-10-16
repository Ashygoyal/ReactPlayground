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

console.log(findNumArray); // outputs 4

//----------------FindIndex function below-----------------
// FindIndex returns the index of first element of array that matches
// the criteria mentioned in the testing function

const findNumArrayIndex = numArray.findIndex((num)=>{
  return num > 3;
});

console.log(findNumArrayIndex); // 3

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

//------------ REDUCE function ------------
/*
The reduce() method reduces the array to a single value.
The reduce() method executes a provided function for each value of the array (from left-to-right).
The return value of the function is stored in an accumulator (result/total).

Syntax:
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

total (Required) - The initialValue, or the previously returned value of the function
currentValue (Required) - The value of the current element
currentIndex (Optional) - The array index of the current element
arr	(Optional) - The array object the current element belongs to

initialValue (Optional) - A value to be passed to the function as the initial value
*/




const demoArr= [1,2,3,4];

const reducedOutput = demoArr.reduce((total, num)=>{
  return total + num;
});

console.log(reducedOutput); // 10

// if demoArr = ['a','b','c','d']
// reducedOutput = abcd (concatenate the strings)

//---------------- SLICE function ----------------
/*
The slice() method returns the selected elements in an array, as a new array object.
Syntax: slice(start,end)
Doesnt include value of element at 'end' 'position, in the resultant array
*/

const slicedArr = demoArr.slice(1,3);
console.log(slicedArr); // [2, 3]

const slicedArr1 = demoArr.slice(-3,-1); // negative index(-1) starts from rightmost element of array
console.log(slicedArr1); // [2, 3]

//---------------- SPLICE method ---------------------------
/*
The splice() method adds/removes items to/from an array, and returns the removed item(s).
This method changes the original array.
Syntax: splice(index, how many, item1.. item n)
If 'how many' is set to 0, no items will be removed
*/

const splicedArr = demoArr.splice(3, 0, 3.5);
console.log('splicedArray is: ' + demoArr); // [1,2,3,3.5,4]























