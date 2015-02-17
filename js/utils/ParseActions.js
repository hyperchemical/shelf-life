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

	removeFood: function(uid, cb){
		var FridgeFood = Parse.Object.extend("FridgeFood");
		var queryObject = new Parse.Query(FridgeFood);
		queryObject.get(uid, {
			success: function(gameScore){
				gameScore.destroy({
					success: function(gameScore){
						console.log("Deleted from cloud");
						if(cb) cb(true);
					},
					error: function(gameScore){
						console.log("Could not delete from cloud");
						if(cb) cb(false);
					}
				});
			},	
			error: function(gameScore, error){
				console.log(error);
			}
		});
	},

	getAllFood: function(cb){
		// relation = 
		var FridgeFood = Parse.Object.extend("FridgeFood");
		var queryObject = new Parse.Query(FridgeFood);
		queryObject.find({
			success: function(results){
				console.log(results);
				if(cb){
					cb(results);
				}
			},
			error: function(error){
				if(cb){
					cb(null);
				}
			}
		});
	}
};

module.exports = ParseActions;