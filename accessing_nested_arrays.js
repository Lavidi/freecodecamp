/* Accessing Nested Arrays
As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.

Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object. */


const _ = require('lodash');

// Define the recordCollection object
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Define the updateRecords function
function updateRecords(records, id, prop, value) {
  // Create a deep copy of the object using Lodash
  const recordCollectionCopy = _.cloneDeep(records);

  if (recordCollectionCopy.hasOwnProperty(id)) {
    if (prop === "tracks") {
      if (!recordCollectionCopy[id].hasOwnProperty("tracks")) {
        recordCollectionCopy[id].tracks = [];
      }

      if (value !== "") {
        recordCollectionCopy[id].tracks.push(value);
      }
    } else {
      if (value === "") {
        delete recordCollectionCopy[id][prop];
      } else {
        recordCollectionCopy[id][prop] = value;
      }
    }
  }

  return recordCollectionCopy;
}

// Example usage
const updatedCollection = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(updatedCollection);

  