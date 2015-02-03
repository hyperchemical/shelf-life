var React = require('react');
var FoodActions = require('../actions/FoodActions');
var FoodItem = require('./FoodItem.react');

var FoodList = React.createClass({

	render: function(){
	    // if (Object.keys(this.props.allFood).length < 1) {
	    //   return null;
	    // }

		var allFood = this.props.allFood;
		var foods = [];

		for(var key in allFood){
			foods.push(<FoodItem key={key} food={allFood[key]} />);
		}

		return (
		<table className="pure-table pure-table-horizontal">
			<thead>
				<tr>
					<th> </th>
					<th>Name</th>
					<th>Type</th>
					<th>Date</th>
					<th>Shelf-Life</th>
					<th>Storage</th>
				</tr>
			</thead>
			{foods}
		</table>
		);
	}

});

module.exports = FoodList;