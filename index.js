const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
    ];


function findMatching(array, namedPerson) {
  let newListOfDrivers = [];
  for (let member of array) {
    if(member.toUpperCase() === namedPerson.toUpperCase()) {
      newListOfDrivers.push(member);
    }
  }
  return newListOfDrivers;
}

//Function to query the array to filter out a new array with all namedPersons starting with the same letter
function fuzzyMatch(array, namedPerson) {
    let newListOfDrivers = [];
    for (let member of array) {
      if(member.charAt(0) === namedPerson.charAt(0)) {
        newListOfDrivers.push(member);
      }
    }
    return newListOfDrivers;
}

//Function to take the array and return each element of the provided namedPerson
function matchName(array, namedPerson) {
    let newListOfDrivers = [];
    for (let infoBlock of array) {
      if(infoBlock.name === namedPerson) {
        newListOfDrivers.push(infoBlock);
      }
    }
    return newListOfDrivers;
}