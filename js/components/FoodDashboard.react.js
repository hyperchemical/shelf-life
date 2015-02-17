var React = require('react');
var _ = require('underscore');

var FoodActions = require('../actions/FoodActions');
var FoodStore = require('../stores/FoodStore');
var FoodTypeStore = require('../stores/FoodTypeStore');
var FoodItem = require('./FoodItem.react');
var FoodList = require('./FoodList.react');
var FoodAdd = require('./FoodAdd.react');

var Authentication = require('../utils/Authentication');

function getFood(){
	return {
		foodItems: FoodStore.getFoodItems(),
		foodCount: FoodStore.getFoodCount()
	};
}

var FoodDashboard = React.createClass({

	mixins: [Authentication],

	getInitialState: function(){
		// _.extend({}, getFood(), {loggedIn: false});
		FoodActions.getAllFood();
		return getFood();
	},

	// Add change listeners to stores
	componentDidMount: function() {
		FoodStore.addChangeListener(this._onChange);
	},

  	// Remove change listers from stores
	componentWillUnmount: function() {
		FoodStore.removeChangeListener(this._onChange);
	},

	render: function(){	
		console.log(this.state.foodItems);
		return (
			<div className="food-dashboard">
				<FoodAdd />
				<FoodList allFood={this.state.foodItems} />
			</div>
			)
	},


	_onChange: function(){
		this.setState(getFood());
	}
});

module.exports = FoodDashboard;