/*

Object.values() takes an object as an argument and 
returns an array of the object’s values. 
The Object.entries() method has been available since ES7

*/


let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};

Object.values(person).forEach(value => {
    console.log(`${value}`);
});

