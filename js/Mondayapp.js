'use strict';

// global variable here...
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {

  // Generate a random customer number between the store's min and max
  getRandomCustomersPerHour: function () {
    return Math.floor( Math.random() * (this.custMax - this.custMin) + this.custMin );
  },

  // To get hourly sales, multiply the random number (generated above) by the average cookies per customer
  getRandomCookiesPerHour: function () {

    for (var i = 0; i < storeHours.length; i++) {
      var avg = Math.floor(this.getRandomCustomersPerHour() * this.avrgCookiesPerCust);
      this.hourlySales.push(avg);
    }
  },

  // Generate the total of the hourly sales of cookies
  getHourlyTotals: function() {
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.totalDailySales = this.totalDailySales + this.hourlySales[i];
      // Or you can say: this.totalDailySales += this.hourlySales[i];
    }
    console.log(this.totalDailySales);
  },


  render: function () {
    var pike = document.getElementById('pike'); // grabbing the parent element from the DOM

    for(var i = 0; i < storeHours.length; i++) {
      var liEl = document.createElement('li');  // create the element
      liEl.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies.`; // give it content 
      pike.appendChild(liEl); // append it
    }
    
    // for the total daily sales portion 
    liEl = document.createElement('li'); // create the element
    liEl.textContent = `Total: ${this.totalDailySales} cookies.`;  // give it content
    pike.appendChild(liEl);  // append it
  }
};

// Call the functions
firstAndPike.getRandomCookiesPerHour();
firstAndPike.getHourlyTotals();
firstAndPike.render();


// object literal for SeaTac

var seaTac = {
  location: 'SeaTac Airport',
  custMin: 3,
  custMax: 24,
  avrgCookiesPerCust: 1.2,
  hourlySales: [],
  totalDailySales: 0,

  getRandomCustomersPerHour: function() {
    return Math.floor( Math.random() * (this.custMax - this.custMin) + this.custMin );
  }, 

  getRandomCookiesPerHour: function() {
    for (var i = 0; i < storeHours.length; i++) {
      var avg = Math.floor(this.getRandomCustomersPerHour() * this.avrgCookiesPerCust);
      this.hourlySales.push(avg);
    }
  },

  getHourlyTotals: function () {
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.totalDailySales = this.totalDailySales + this.hourlySales[i];
    }
  },

  render: function() {
    var seatac = document.getElementById('seatac');
    for(var i = 0; i < storeHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies.`;
      seatac.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailySales} cookies.`;
    seatac.appendChild(liEl);
  }
};

seaTac.getRandomCookiesPerHour();
seaTac.getHourlyTotals();
seaTac.render();


// object literal for Seattle Center

var seattleCenter = {
  location: 'Seattle Center',
  custMin: 11,
  custMax: 38,
  avrgCookiesPerCust: 3.7,
  hourlySales: [],
  totalDailySales: 0,

  getRandomCustomersPerHour: function() {
    return Math.floor( Math.random() * (this.custMax - this.custMin) + this.custMin );
  },

  getRandomCookiesPerHour: function() {
    for (var i = 0; i < storeHours.length; i++) {
      var avg = Math.floor(this.getRandomCustomersPerHour() * this.avrgCookiesPerCust);
      this.hourlySales.push(avg); // missing this
    }
  },

  getHourlyTotals: function() {
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.totalDailySales = this.totalDailySales + this.hourlySales[i];
    }
  },

  render: function() {
    var seattlecenter = document.getElementById('seattle-center');
    for(var i = 0; i < storeHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies.`;
      seattlecenter.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailySales} cookies.`;
    seattlecenter.appendChild(liEl);
  }
}; 

seattleCenter.getRandomCookiesPerHour();
seattleCenter.getHourlyTotals();
seattleCenter.render();


// object literal for Capitol Hill

var capitolHill = {
  location: 'Capitol Hill',
  custMin: 20,
  custMax: 38,
  avrgCookiesPerCust: 2.3,
  hourlySales: [],
  totalDailySales: 0,

  getRandomCustomersPerHour: function() {
    return Math.floor( Math.random() * (this.custMax - this.custMin) + this.custMin );
  },

  getRandomCookiesPerHour: function() {
    for (var i = 0; i < storeHours.length; i++) {
      var avg = Math.floor(this.getRandomCustomersPerHour() * this.avrgCookiesPerCust);
      this.hourlySales.push(avg);
    }
  },

  getHourlyTotals: function() {
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.totalDailySales = this.totalDailySales + this.hourlySales[i];
    }
  },

  render: function() {
    var capitolhill = document.getElementById('cap-hill');
    for(var i = 0; i < storeHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies.`;
      capitolhill.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailySales} cookies.`;
    capitolhill.appendChild(liEl);
  }
}; 

capitolHill.getRandomCookiesPerHour();
capitolHill.getHourlyTotals();
capitolHill.render();


// object literal for Alki

var alki = {
  location: 'Alki',
  custMin: 2,
  custMax: 16,
  avrgCookiesPerCust: 2.6,
  hourlySales: [],
  totalDailySales: 0,

  getRandomCustomersPerHour: function() {
    return Math.floor( Math.random() * (this.custMax - this.custMin) + this.custMin );
  },

  getRandomCookiesPerHour: function() {
    for (var i = 0; i < storeHours.length; i++) {
      var avg = Math.floor(this.getRandomCustomersPerHour() * this.avrgCookiesPerCust);
      this.hourlySales.push(avg);
    }
  },

  getHourlyTotals: function() {
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.totalDailySales = this.totalDailySales + this.hourlySales[i];
    }
  },

  render: function() {
    var alki = document.getElementById('alki');
    for(var i = 0; i < storeHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies.`;
      alki.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailySales} cookies.`;
    alki.appendChild(liEl);
  }
};

alki.getRandomCookiesPerHour();
alki.getHourlyTotals();
alki.render();




































