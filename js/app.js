window.React = require('react');
var FoodTypes = require('./FoodTypes');
var FoodTypeAPI = require('./utils/FoodTypeAPI');
var FoodApp = require('./components/FoodApp.react');
var LoginPage = require('./components/LoginPage.react');
var LogoutPage = require('./components/LogoutPage.react');
var FoodDashboard = require('./components/FoodDashboard.react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

FoodTypes.init();

FoodTypeAPI.getFoodTypes();

// Render FluxCartApp Controller View
// React.render(
//   <FoodApp />,
//   document.getElementById('shelflife')
// );

var routes = (
	<Route name="app" path="/" handler={FoodApp}>
		<Route name="login" handler={LoginPage}/>
		<Route name="dashboard" handler={FoodDashboard}/>
		<Route name="logout" handler={LogoutPage}/>
	</Route>
);

Router.run(routes, function(Handler){
	React.render(<Handler/>, document.body)
});