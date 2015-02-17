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
  addToTable: function(update) {
    ParseActions.addFood(update, function(foodID){
      if(foodID){
        AppDispatcher.handleAction({
          actionType: FoodConstants.FOOD_ADD,
          uid: foodID,
          update: update
        });
      } else {
        console.log("Failed to add");
      }
    });

  },

  // Remove item from cart
  removeFromTable: function(uid) {
    console.log("removeFromTable");
    console.log(uid);
    ParseActions.removeFood(uid, function(isDeleted){
      if(isDeleted){
        AppDispatcher.handleAction({
          actionType: FoodConstants.FOOD_REMOVE,
          uid: uid
        });
      }

    })

  },

  getAllFood: function(){
    ParseActions.getAllFood(function(allFood){
      if(allFood === null) return;
      console.log("FoodActions getAllFood");
      console.log(allFood);
      for(var i = 0; i < allFood.length; i++){
        AppDispatcher.handleAction({
          actionType: FoodConstants.FOOD_ADD,
          uid: allFood[i].id,
          update: allFood[i].attributes
        });
      }
    });
  }

};

module.exports = FoodActions;