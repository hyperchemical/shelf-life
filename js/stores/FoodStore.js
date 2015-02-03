var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FoodConstants');
var _ = require('underscore');

var _food = {}; var _uid = 0;

function add(uid, update) {
	if(uid < 0){
		_uid = _uid + 1;
		uid = _uid;
	}
	update.uid = uid;
	_food[uid] = _.extend({}, _food[uid], update);

}

function remove(uid){
	delete _food[uid]
}

var FoodStore = _.extend({}, EventEmitter.prototype, {
	getFoodItems: function(){
		return _food;
	},

	getFoodCount: function(){
		return Object.keys(_food).length;
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

    case FluxCartConstants.FOOD_ADD:
      add(action.uid, action.update);
      break;

    case FluxCartConstants.FOOD_REMOVE:
      remove(action.uid);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  FoodStore.emitChange();

  return true;

});

module.exports = FoodStore;