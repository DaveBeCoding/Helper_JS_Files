/**
 *          Adjective (MATHEMATICS) :: Enumerable ::
 *      Able to be counted by one-to-one correspondence
 *      with the set of all positive integers.
 */

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  ssn: "123-456-7890",
};

console.log("\n");
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key} : ${person[key]}`);
  }
}
console.log("\n");

// SAMPLE OUTPUT ->
/*

  firstName : John
  lastName : Doe
  age : 25
  ssn : 123-456-7890

 */

//  NOTES


//         for (const key in object) {
//         if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

//         [Object.hasOwnProperty] :: method ensures that the property 
//         belongs to the person object, not the inherited properties.

//         The method will not be available in objects where it is reimplemented, 
//         or on objects created using Object.create(null) (as these don't inherit 
//         from Object.prototype). 


