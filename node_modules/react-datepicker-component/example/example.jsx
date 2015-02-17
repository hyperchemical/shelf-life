/** @jsx React.DOM */

var React = require('react'),
  DatePickerComponents = require('../index');
  DatePicker = DatePickerComponents.DatePicker,
  DatePickerInput = DatePickerComponents.DatePickerInput;

React.renderComponent(
    <DatePicker date={new Date(2010, 0, 4)} />,
    document.getElementById('datepicker')
);


/**
 * @param {Date} date
 * @returns {Date|string|number}
 */
var formatDate = function(date) {
    var output = '';
    output+=date.getMonth()+1+'/';
    output+=date.getDate()+'/';
    output+=date.getFullYear();
    return output;
}

React.renderComponent(
    <DatePickerInput classNamePrefix={"wide-datepicker"} date={new Date(2012, 0, 4)} dateFormatter={formatDate} />,
    document.getElementById('datepicker-input')
);
