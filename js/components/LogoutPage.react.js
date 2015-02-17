var React = require('react');
var ParseActions = require('../utils/ParseActions');

var LogoutPage = React.createClass({
	componentDidMount: function(){
		ParseActions.logout();
	},

	render: function(){
		return <p> You are now logged out </p>;
	}
});

module.exports = LogoutPage;