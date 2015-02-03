var FoodActions = require('../actions/FoodActions');

module.exports = {
	getFoodTypes: function(){
	    var data = JSON.parse(localStorage.getItem('foodtypes'));
	    console.log('Load Food Types');
	    console.log(data);
	    FoodActions.recieveTypes(data);
	}
}