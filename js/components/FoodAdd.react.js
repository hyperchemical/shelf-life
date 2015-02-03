var React = require('react');
var FoodActions = require('../actions/FoodActions');

var ENTER_KEY_CODE = 13;

var FoodAdd = React.createClass({
	addToTable: function(event){
		var uid = -1;
		var update = {
			name: this.props.name
		}
	},

	getInitialState: function(){
		return {
			value: ''
		}
	},


	_onChange: function (event){
		this.setState({
			value:event.target.value
		});
	},

	_onSubmit: function(){
		FoodActions.addToTable(-1, {name:this.state.value});
	},

	_onKeyDown: function(event){
		if(event.keyCode === ENTER_KEY_CODE){
			this._onSubmit();
		}
	},

	render: function(){
		return (
			<div className="pure-form">
				<fieldset>
					<legend>New Food</legend>
					<input 
						value={this.state.value}  
						onChange={this._onChange}
						onKeyDown={this._onKeyDown}
					/>

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