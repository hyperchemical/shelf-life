## React DatePicker Component

A fork of https://github.com/misino/react-datepicker. 

* CommonJS
* Month Picker instead of individual year/day pickers
* classNamePrefix property for style customization

### Usage


Install in your project:

```
npm install react-datepicker-component
```

And then include via require(): 
 
```
 var React = require('react'),
   DatePicker = require('react-datepicker-component/DatePicker.jsx'),
   DatePickerInput = require('react-datepicker-component/DatePickerInput.jsx');
 
 React.renderComponent(
     <DatePicker date={new Date(2014, 0, 8)} />,
        document.getElementById('datepicker')
 );
 
 React.renderComponent(
     <DatePickerInput 
        classNamePrefix={"wide-datepicker"} 
        date={new Date(2012, 0, 4)} 
        beforeUpdate={formatDate} />,
        document.getElementById('datepicker-input')
 );

```
 
Then bundle with something that can package your stuff for the browser, like browserify.
 
### Customize

 
You can change the css class prefix used by passing in the classNamePrefix property. See the [example](example/) and [stylus](css/datepicker.styl) to see this in action.
 
 