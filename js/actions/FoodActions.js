var AppDispatcher = require('../dispatcher/AppDispatcher');
var FoodConstants = require('../constants/FoodConstants');
var ParseActions = require('../utils/ParseActions');

// Define actions object
var FoodActions = {

  recieveTypes: function(data){
    AppDispatcher.handleAction({
      actionType: FoodConstants.RECIEVE_TYPES,
      data: data
    })
  },

  // Add item to cart
  addToTable: function(uid, update) {
    ParseActions.addFood(update, function(isAdded){
      if(isAdded){
        AppDispatcher.handleAction({
          actionType: FoodConstants.FOOD_ADD,
          uid: uid,
          update: update
        });
      } else {
        console.log("Failed to add");
      }
    });

  },

  // Remove item from cart
  removeFromTable: function(uid) {
    AppDispatcher.handleAction({
      actionType: FoodConstants.FOOD_REMOVE,
      uid: uid
    })
  },

  getAllFoods: function(){
    
  }

};

module.exports = FoodActions;