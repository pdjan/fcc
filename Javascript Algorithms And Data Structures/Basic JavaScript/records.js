/*
Testiranje pomocu komande: node records.js

Record Collection

You are given a JSON object representing a part of your album collection. 
Each album has several properties and a unique id number as its key. 
Not all albums have complete information.
Write a function which takes an album's id (like 2548), a property prop 
(like "artist" or "tracks"), and a value (like "Addicted to Love") to modify 
the data in this collection.
If prop isn't "tracks" and value isn't empty (""), update or set the value 
for that record album's property.
Your function must always return the entire collection object.
There are several rules for handling incomplete data:
If prop is "tracks" but the album doesn't have a "tracks" property, 
create an empty array before adding the new value to the album's 
corresponding property.
If prop is "tracks" and value isn't empty (""), push the value 
onto the end of the album's existing tracks array.
If value is empty (""), delete the given prop property from the album.
**/

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  // skratimo kod deklaracijom promenljive o  
  var o = collection[id];
  if (prop == "tracks") {
    // ako kolekcija ima tracks property
    if (o.hasOwnProperty("tracks")) {
      // ako value nije prazan string
      if (value != "") {
        o[prop].push(value);
      } 
    } else { // ne postoji tracks u kolekciji
      var arr = [];
      arr.push(value);
      o[prop] = arr;
    } 
  } else { // prop nije tracks 
    if (value != "") {
      o[prop] = value;
    }
  }
  // if value is empty delete prop
  if (value == "") {
    delete o[prop];
  }
  return collection;
} 


// Testovi
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2548, "artist", "");
updateRecords(2468, "tracks", "Free");
updateRecords(2548, "tracks", "");
updateRecords(1245, "album", "Riptide");

console.log(collection);
