var React = require('react');
var FoodStore = require('../stores/FoodStore');
var FoodTypeStore = require('../stores/FoodTypeStore');
var FoodItem = require('./FoodItem.react');
var FoodList = require('./FoodList.react');
var FoodAdd = require('./FoodAdd.react');

function getFood(){
	return {
		foodItems: FoodStore.getFoodItems(),
		foodCount: FoodStore.getFoodCount()
	};
}

var FoodApp = React.createClass({

	getInitialState: function(){
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

		return (
			<div className="flux-cart-app">
				<FoodAdd />
				<FoodList allFood={this.state.foodItems} />
			</div>
			)
	},


	_onChange: function(){
		this.setState(getFood());
	}
});

module.exports = FoodApp;