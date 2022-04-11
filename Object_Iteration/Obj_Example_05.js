/*

Object.entries() takes an object and returns an array of the object’s 
own enumerable string-keyed property [key, value] pairs

*/

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});