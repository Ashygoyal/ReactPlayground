// Copying values

const num = 1;
console.log(num); //1

const num2 = num; // num2 just points to the memory location where num is stored
// It doesnt actually copy the value of num

console.log(num2); //1


// Another Example to prove this 

const obj1 =  {
    name: 'John'
};

const obj2= obj1;

obj1.name = 'Jane';

console.log(obj2.name); // Jane
// Even though we changed name for obj1, it reflects 
// in obj2 as well, as obj2 is just a pointer to obj1

// To create a dead copy of obj1, use the spread operator
 const obj3 = {
   ...obj1
 }
 
obj1.name = 'Doe';

console.log(obj3.name); // Jane
// If obj3 was not a copy of obj1, it would have shown
// Doe, but we created obj3 as exact copy of obj1
// by using spread operator.
 