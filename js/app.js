window.React = require('react');
var FoodTypes = require('./FoodTypes');
var FoodTypeAPI = require('./utils/FoodTypeAPI');
var FoodApp = require('./components/FoodApp.react');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

FoodTypes.init();

FoodTypeAPI.getFoodTypes();



// Render FluxCartApp Controller View
React.render(
  <FoodApp />,
  document.getElementById('shelflife')
);