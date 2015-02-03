var AppDispatcher = require('../dispatcher/AppDispatcher');
var FoodConstants = require('../constants/FoodConstants');

// Define actions object
var FoodActions = {

  // Add item to cart
  addToTable: function(uid, update) {
    AppDispatcher.handleAction({
      actionType: FoodConstants.FOOD_ADD,
      uid: uid,
      update: update
    })
  },

  // Remove item from cart
  removeFromTable: function(uid) {
    AppDispatcher.handleAction({
      actionType: FoodConstants.FOOD_REMOVE,
      uid: uid
    })
  }

};

module.exports = FoodActions;