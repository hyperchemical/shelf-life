/** @jsx React.DOM */

var React = require('react');

var monthNames = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun",
  "Jul", "Aug", "Sep",
  "Oct", "Nov", "Dec"];

var MonthPicker = React.createClass({
  getDefaultProps: function() {
    return {
      buttonClassNames : "btn btn-xs btn-default",
      textClassNames : "btn btn-xs"
    };
  },

  changeMonth : function(month) {
    this.props.onChangeMonth(month);
  },

  render: function() {
    return (
      <div className={"monthpicker"}>
        <a onClick={this.changeMonth.bind(this, this.props.date.getMonth()-1)} className={this.props.buttonClassNames}>&lt;&lt;</a>
        <span className={this.props.textClassNames}>{monthNames[this.props.date.getMonth()] + ", " + this.props.date.getFullYear()}</span>
        <a onClick={this.changeMonth.bind(this, this.props.date.getMonth()+1)} className={this.props.buttonClassNames}>&gt;&gt;</a>
      </div>
      )
  }
});

module.exports = MonthPicker;