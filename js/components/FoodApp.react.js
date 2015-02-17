var React = require('react');
var FoodStore = require('../stores/FoodStore');
var FoodTypeStore = require('../stores/FoodTypeStore');
var FoodItem = require('./FoodItem.react');
var FoodList = require('./FoodList.react');
var FoodAdd = require('./FoodAdd.react');
var LoginPage = require('./LoginPage.react');
var _ = require('underscore');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var ParseActions = require('../utils/ParseActions');

var FoodApp = React.createClass({

	mixins: [Router.Navigation],

	getInitialState: function(){
		// _.extend({}, getFood(), {loggedIn: false});
		return {loggedIn: ParseActions.loggedIn()};
	},

	// Add change listeners to stores
	componentDidMount: function() {
		// FoodStore.addChangeListener(this._onChange);
	},

  	// Remove change listers from stores
	componentWillUnmount: function() {
		// FoodStore.removeChangeListener(this._onChange);
	},

	render: function(){	
		this.transitionTo('dashboard');
		return (
			<div className="flux-cart-app">
				<RouteHandler/>
			</div>
			);
	}


	// _onChange: function(){
	// 	this.setState(getFood());
	// }
});

module.exports = FoodApp;