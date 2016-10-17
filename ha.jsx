var Hello = React.createClass({
  displayName: 'Hello bye',
  render: function() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});

ReactDOM.render(
  React.createElement(Hello, {name: "World"}),
  document.getElementById('container')
);


ReactDOM.render(
   <h1>Hello helo, world!</h1>,
   document.getElementById('example')
);

/*ReactDOM.renderComponent(
   <h1>Hello, world!</h1>,
   document.getElementById('example')
);*/



