var React = require('react');
var FoodActions = require('../actions/FoodActions');
var FoodTypeStore = require('../stores/FoodTypeStore')
var _ = require('underscore');

var ENTER_KEY_CODE = 13;

function getFoodData(){
	return {
		foodtypes: FoodTypeStore.getFoodTypes()
	};
}

var FoodAdd = React.createClass({
	addToTable: function(event){
		var uid = -1;
		var update = {
			name: this.props.name
		}
	},

	getInitialState: function(){
		obj = getFoodData();
		foodObj = 
			{
				name: '',
				foodType: obj.foodtypes[0]
			};

		return _.extend({}, obj, foodObj);
	},

	componentDidMount: function(){
		FoodTypeStore.addChangeListener(this._onChange);
	},

	_onTextChange: function(event){
		obj = {
			name: event.target.value
		};
		this.setState(
			_.extend({}, this.state, obj)
		);
	},

	_onTypeChange: function (event){
		this.setState(
			_.extend({}, this.state, {
				foodType: this.state.foodtypes[event.target.value]
			})
		);
	},


	_onChange: function (event){
		this.setState(
			_.extend({}, getFoodData(), obj)
		);
	},


	_onSubmit: function(event){
		foodObj = {
			name:this.state.name,
			type:this.state.foodType
		}
		FoodActions.addToTable(-1, foodObj);
		this.state.name = "";
	},

	_onKeyDown: function(event){
		if(event.keyCode === ENTER_KEY_CODE){
			this._onSubmit(event);
		}
	},

	render: function(){
		return (
			<div className="pure-form pure-form-stacked">
				<fieldset>
					<label>Food Name</label>
					<input 
						value={this.state.name}  
						onChange={this._onTextChange}
						onKeyDown={this._onKeyDown}
						placeholder="Food Name"
					/>

					<label>Food Type</label>
					<select onChange={this._onTypeChange}>
						{this.state.foodtypes.map(function(type, index){
							return (
								<option key={index} value={index}>{type.capitalize()}</option>
							)
						})}
					</select>

					<button
						type="button"
						onClick={this._onSubmit} 
					>
					Add Food
					</button>
				</fieldset>
			</div>
		);
	}

});

module.exports = FoodAdd;