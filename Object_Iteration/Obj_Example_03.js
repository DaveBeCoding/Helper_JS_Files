/*

Object.keys() takes an object and returns an array of the object’s properties.
 By chaining the Object.keys() with the forEach() method, you can access 
 the keys and values of an object. Note that the Object.keys() 
 method was introduced in ES6. For example:





*/


let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};

Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
});