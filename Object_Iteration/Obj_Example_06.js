/*

Object.getOwnPropertyNames() method accepts an object as an argument 
and returns an array of object’s keys, including non-enumerable properties 
except for the ones which use Symbol

*/


let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};

Object.getOwnPropertyNames(person).forEach(key =>
    console.log(`${key}: ${person[key]}`)
);