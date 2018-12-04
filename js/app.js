'use strict';

// Need array of store locations (global scope, remains constant) 
// Need array of time of day 6am-8pm (global scope, remains constant)

// Object Literals...
// Need array of CustMin per store (local scope)
// Need array of CustMax per store (local scope)
// Need array of AvrgCookiesPerSale per store (local scope)
// Need array of NumCookiesPerTOD (local scope)

// Goal: List each store, display the object literals listed above for each store. 
// Do it all from JS, not hard-coded in HTML
// Working with the DOM - document object model

// var storeLoc = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];
// var timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Store Stats (custMax, custMin, avrgCookiesSold)
// var storeStats = {
//   custMin: [23, 3, 11, 20, 2],
//   custMax: [65, 24, 38, 38, 16],
//   avrgCookiesSold: [6.3, 1.2, 3.7, 2.3, 4.6],

//   render: function() {
//     var ulElement1 = document.getElementById('listFirstandPike');

//     // Goal: create list items and add them to the DOM

//     for(var i = 0; i < this.custMin.length; i++) {
//       // 1. Access / create the element
//       var liElement = document.createElement('li');

//       // 2. Give the element content
//       liElement.textContent = `${storeLoc[i]} = ${this.custMin[i]}.`;

//       // 3. Append the element to the DOM (usually to its parent)
//       // parentElement.appendChild(childElement);

//       ulElement1.appendChild(liElement);
//     }
//   }
// };

// storeStats.render();

var storeLoc = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];
var listHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var firstAndPike = {
  location: 'First and Pike',
  custMin: 23,
  custMax: 65,
  avrgCookiesSold: 6.3,
  hourlySales: [],
  getRandomCustomers: function () {

    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin);
  },

  getRandomCookies: function () {
    var ulElement = document.getElementById('listAvrgCookies');


    for (var i = 0; i < listHours.length; i++) {
      var liElement = document.createElement('li');
      var avrgCookiesSoldPerHour = Math.floor(this.getRandomCustomers() * this.avrgCookiesSold);
      // console.log(avrgCookiesSoldPerHour)
      // liElement.textContent = `${listHours[i]}: ${listCookies}`;
      liElement.textContent = avrgCookiesSoldPerHour;
      ulElement.appendChild(liElement);
    }
  }
}

firstAndPike.getRandomCookies();




// var seaTac = {
//   location: 'SeaTac Airport',
//   custMin: 3,
//   custMax: 24,
//   avrgCookiesSold: 1.2,
//   getRandomCustomers: function() {
//   }
// }
// console.log(seaTac)

// var seattleCenter = {
//   location: 'Seattle Center',
//   custMin: 11,
//   custMax: 38,
//   avrgCookiesSold: 3.7,
//   getRandomCustomers: function() {
//   }
// }
// console.log(seattleCenter)

// var capHill = {
//   location: 'Capitol Hill',
//   custMin: 20,
//   custMax: 38,
//   avrgCookiesSold: 2.3,
//   getRandomCustomers: function() {

//   }
// }
// console.log(capHill)

// var alki = {
//   location: 'Alki',
//   custMin: 2,
//   custMax: 16,
//   avrgCookiesSold: 4.6,
//   getRandomCustomers: function() {

//   }
// }

// var twoThousandSeventeen = {
//   miles: [5, 32, 9, 80, 5],

//   render: function() {
//     var ulElement = document.getElementById('list2017');

//     // Goal: create list items and add them to the DOM

//     for(var i = 0; i < this.miles.length; i++) {
//       // 1. Access / create the element
//       var liElement = document.createElement('li');

//       // 2. Give the element content
//       liElement.textContent = `In ${months[i]}, I hiked ${this.miles[i]} miles.`;

//       // 3. Append the element to the DOM (usually to its parent)
//       // parentElement.appendChild(childElement);

//       ulElement.appendChild(liElement);
//     }
//   }
// };
// twoThousandEighteen.render();
// twoThousandSeventeen.render();



// HTML as an object literam aka the DOM:
// html {
//   head: {
//     title: 'DOM demo',
//     link: filepath to CSS file
//   },
//   body: {
//     h1: 'Allie\'s Miles Hiked',
//     ul: {
//       li: 'some content'
//       li: 'some content'
//       li: 'some content'
//       li: 'some content'
//       li: 'some content'
//     },
//     script: link to JS file
//   }
// }