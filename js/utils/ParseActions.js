var Parse = require('./ParseInit');

var ParseActions = {
	createUser: function(username, password, cb){
		console.log("CreateAccount");
		Parse.User.signUp(username, password, {ACL: new Parse.ACL()}, 
		{
			success: function(user){
				if(cb) cb(true);
				console.log(user.id);
				if(Parse.User.current())
					console.log("LoggedIN");
				else 
					console.log("Not logged in");
			},
			error: function(user, error){
				if(cb) cb(false);
				console.log(error);
			}
		});
	},

	login: function(username, password, cb){
		// if(localStorage.token){
		if(!(Parse.User.current() === null)){
			console.log("Already logged in");
			return false;
		}

		console.log("LoginAccount");
		Parse.User.logIn(username, password, {
			success: function(user){
				cb(true);
			}, 
			error: function(user, error){
				console.log(error);
				cb(false);
			}
		});
	},

	logout: function(){
		console.log("Logged out");
		Parse.User.logOut();
	},

	loggedIn: function(){
		console.log("Check logged in");
		var curUser = Parse.User.current();
		console.log(!(Parse.User.current() === null));
		console.log(curUser);
		return !(Parse.User.current() === null);
	},

	currentUser: function(){
		return Parse.User.current();
	},

	addFood: function(update, cb){
		var FridgeFood = Parse.Object.extend("FridgeFood");
		var fridgeFood = new FridgeFood();
		fridgeFood.set("name", update.name);
		fridgeFood.set("type", update.type);

		fridgeFood.save(null, {
			success: function(fridgeFood){
				console.log(fridgeFood);
				if(cb) cb(true);
			},
			error: function(fridgeFood, error){
				if(cb) cb(false);
			}
		})
	},

	getAllFood: function(){
		// relation = 
		var FridgeFood = Parse.Object.extend("FridgeFood");
		var queryObject = new Parse.Query(FridgeFood);
		queryObject.find({
			success: function(results){

			},
			error: function(error){

			}
		});
	}
};

module.exports = ParseActions;