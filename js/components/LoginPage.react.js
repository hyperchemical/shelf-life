
var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var ParseActions = require('../utils/ParseActions');
var FoodActions = require('../actions/FoodActions');

var LoginPage = React.createClass({
	mixins: [Router.Navigation],

	statics: {
		attemptedTransition: null
	},

	getInitialState: function() {
		return {
			signinMessage: '',
			signupMessage: ''
		};
	},

	handleLogin: function(event){
		event.preventDefault();
		var username = this.refs.email.getDOMNode().value;
		var password = this.refs.pass.getDOMNode().value;
		ParseActions.login(username, password, function(loggedIn){
			console.log("handleLogin");
			if(!loggedIn){
				return this.setState({signinMessage:"Unable to log in"});
			}
			FoodActions.getAllFood();
			if(LoginPage.attemptedTransition){
				var transition =  LoginPage.attemptedTransition;
				LoginPage.attemptedTransition = null;
				transition.retry();
			}
		}.bind(this));

	},

	handleSignup: function(event){
		event.preventDefault();
		var username = this.refs.email1.getDOMNode().value;
		var password = this.refs.pass1.getDOMNode().value;
		ParseActions.createUser(username, password, function(createdAccount){
			if(createdAccount){
				return this.setState({signupMessage: "Created Account Successfully"});
			} else {
				return this.setState({signupMessage:"Failed to Created Account"});
			}
		}.bind(this));
		console.log("HandleSignup");
	},

	_onNewUsernameChange: function(event){
		this.setState({
			newUsername: event.target.value
		});
	},

	_onNewPasswordChange: function(event){
		this.setState({
			newPassword: event.target.value
		});
	},

	// <div>
 //        <label><input ref="email" onChange={this._onNewUsernameChange} placeholder="email"/></label>
 //        <label><input ref="pass" onChange={this._onNewPasswordChange} placeholder="password"/></label><br/>
 //        <button type="submit" onClick={this._createNewAccount}>Create Account</button>
 //        {errors}
	// </div>

	_createNewAccount: function(event){
		// var username = this.refs.email.getDOMNode().value;
		// var password = this.refs.pass.getDOMNode().value;
		CreateAccount.create(this.state.newUsername, this.state.newPassword);
		console.log("createNewAccount");
	},

	render: function(){
		// var errors = this.state.error ? <p>Request Error</p> : '';
		if(ParseActions.loggedIn()){
			this.transitionTo('/');
		}

		console.log(ParseActions.currentUser());

		return (
			<div>
				<h1> Diary Sign-In </h1>
				{this.state.signinMessage}
				<form onSubmit={this.handleLogin}>
			        <label><input ref="email" placeholder="email"/></label>
			        <label><input ref="pass" placeholder="password"/></label><br/>
			        <button type="submit">Login</button>
				</form>
				<h1> Diary Create Account </h1>
				{this.state.signupMessage}
				<form onSubmit={this.handleSignup}>
			        <label><input ref="email1" placeholder="email"/></label>
			        <label><input ref="pass1" placeholder="password"/></label><br/>
			        <button type="submit">Create Account</button>
				</form>

			</div>
		);
	}


});

module.exports = LoginPage;