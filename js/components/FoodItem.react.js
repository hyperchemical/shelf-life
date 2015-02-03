var React = require('react');
var FoodActions = require('../actions/FoodActions');

var FoodItem = React.createClass({

	_deleteItem: function(){
		FoodActions.removeFromTable(this.props.food.uid);
	},

	render: function(){
		var food = this.props.food;
		return (
		<tr>
			<td> <button type="button" 
				onClick={this._deleteItem}>x
				</button>
			</td>
			<td>{food.name}</td>
			<td>{food.type.capitalize()}</td>
			<td>{food.date}</td>
			<td>{food.shelflife}</td>
			<td>{food.storage}</td>
		</tr>
		);
	}

});

module.exports = FoodItem;