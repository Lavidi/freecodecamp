/* Testing Objects for Properties
To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.

Example

function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
The first checkForProperty function call returns true, while the second returns false.

Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found. */

function checkObj(obj, checkProp) {
    // Check if the object has the specified property
    if (obj.hasOwnProperty(checkProp)) {
      // If the property exists, return its value
      return obj[checkProp];
    } else {
      // If the property is not found, return "Not Found"
      return "Not Found";
    }
  }
  
  // Example usage:
  const myObject = { top: 'hat', bottom: 'pants' };
  
  console.log(checkObj(myObject, 'top'));    // Output: 'hat'
  console.log(checkObj(myObject, 'middle')); // Output: 'Not Found'
  