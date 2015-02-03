window.React = require('react');
var FoodApp = require('./components/FoodApp.react');

// Render FluxCartApp Controller View
React.render(
  <FoodApp />,
  document.getElementById('shelflife')
);