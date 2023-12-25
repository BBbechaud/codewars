// Codewars Challenge 79 (Level 7kyu): Conference Traveller

// Write a function conferencePicker that takes in two arguments:

// citiesVisited, a list of cities that Lucy has visited before, given as an array of strings.
// citiesOffered, a list of cities that will host SECSR conferences this year, given as an array of strings. citiesOffered will already be ordered in terms of the relevance of the conferences for Lucy's research (from the most to the least relevant).
// The function should return the city that Lucy should visit, as a string.

// Also note:

// You should allow for the possibility that Lucy hasn't visited any city before.
// SECSR organizes at least two conferences each year.
// If all of the offered conferences are hosted in cities that Lucy has visited before, the function should return 'No worthwhile conferences this year!' (Nothing in Haskell)
// Example:

// citiesVisited = ['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'];
// citiesOffered = ['Stockholm','Paris','Melbourne'];

// conferencePicker (citiesVisited, citiesOffered);
//  ---> 'Paris'

function conferencePicker (citiesVisited, citiesOffered) {
    for (const city of citiesOffered) {
          if (!citiesVisited.includes(city)) {
              return city;
          }
      }
      return 'No worthwhile conferences this year!';
  }