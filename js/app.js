'use strict';

// Global variables...

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var storeTable = document.getElementById('stores');

// Constructor function...

function Store(location, custMin, custMax, avrgCookiesPerCust) {
  this.location = location;
  this.custMin = custMin;
  this.custMax = custMax;
  this.avrgCookiesPerCust = avrgCookiesPerCust;
  this.hourlySales = [];
  this.totalDailySales = 0;
  Store.allStores.push(this);
}

// Build array for all stores...
Store.allStores = [];

// Make render method for constructor's prototype...
Store.prototype.render = function () {

  // Create tr
  var trEl = document.createElement('tr');

  // Create td
  var tdEl = document.createElement('td');
  // Give td content
  tdEl.textContent = this.location;
  // Append td to tr
  trEl.appendChild(tdEl);

  for(var i = 0; i < storeHours.length; i++) {
    var randCust = Math.floor( Math.random() * (this.custMax - this.custMin) + this.custMin);
    
    var randCookies = Math.floor(randCust * this.avrgCookiesPerCust);
  
    this.totalDailySales += randCookies

    tdEl = document.createElement('td');
    tdEl.textContent = randCookies;
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);

  // Append tr to table...
  storeTable.appendChild(trEl);
};

// Make separate function for table header...
Store.renderHeader = function() {
  // Make a new row...
  var headerRow = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Stores';
  headerRow.appendChild(thEl);

  // Make a for loop...
  for(var i = 0; i < storeHours.length; i++) {
    // Create a th element
    thEl = document.createElement('th');
    // Give it content
    thEl.textContent = storeHours[i];
    headerRow.appendChild(thEl);
    // Prepend row to table
    storeTable.prepend(headerRow);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Totals';
  headerRow.appendChild(thEl);
};

Store.renderFooter = function() {
  // Make a new row, make cell, give it content, append it to ...
  var footerRow = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals';
  trEl.appendChild(tdEl);

//   liEl = document.createElement('li');
//   liEl.textContent = `Total: ${this.totalDailySales} cookies.`;
//   seattlecenter.appendChild(liEl);
// var footerRow = document.createElement('tr');


};

// Make global variables for each store, then call the render method of each instance


var firstAndPike = new Store ('First and Pike', 23, 65, 6.3);
var seaTac = new Store ('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store ('Seattle Center', 11, 38, 3.7);
var capHill = new Store ('Capitol Hill', 20, 38, 2.3);
var alki = new Store ('Alki', 2, 16, 4.6);


// Call the functions
Store.renderHeader();
firstAndPike.render();
seaTac.render();
seattleCenter.render();
capHill.render();
alki.render();











