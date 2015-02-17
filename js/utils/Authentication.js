var ParseActions = require('./ParseActions');
var LoginPage = require('../components/LoginPage.react');

var Authentication = {
	statics: {
		willTransitionTo: function(transition){
			console.log("Authentication");
			if(!ParseActions.loggedIn()){
				LoginPage.attemptedTransition = transition;
				transition.redirect('/login');
			}
		}
	}
};

module.exports = Authentication;