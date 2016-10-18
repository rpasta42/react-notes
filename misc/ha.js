"use strict";

var Hello = React.createClass({
  displayName: 'Hello bye',
  render: function render() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});

ReactDOM.render(React.createElement(Hello, { name: "World" }), document.getElementById('container'));

ReactDOM.render(React.createElement(
  "h1",
  null,
  "Hello helo, world!"
), document.getElementById('example'));

/*ReactDOM.renderComponent(
   <h1>Hello, world!</h1>,
   document.getElementById('example')
);*/

