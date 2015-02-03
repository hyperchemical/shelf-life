var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FoodConstants = require('../constants/FoodConstants');
var _ = require('underscore');

var _foodtypes = {};

function loadFoodTypes(data){
	_foodtypes = data[0].foodtype;
}

var FoodTypeStore = _.extend({}, EventEmitter.prototype, {
	getFoodTypes: function(){
		return _foodtypes;
	},

	getFoodTypesCount: function(){
		return Object.keys(_foodtypes).length;
	},

	emitChange: function(){
		this.emit('change');
	},

	// Add change listener
	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	// Remove change listener
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    case FoodConstants.RECIEVE_TYPES:
    	loadFoodTypes(action.data);
    	break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  FoodTypeStore.emitChange();

  return true;

});

module.exports = FoodTypeStore;