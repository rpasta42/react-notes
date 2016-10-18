'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

[1, 2, 3].map(function (n) {
  return n + 1;
});
var ReactDOM = require('react-dom');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var HelloMessage = function (_React$Component) {
  _inherits(HelloMessage, _React$Component);

  function HelloMessage() {
    _classCallCheck(this, HelloMessage);

    return _possibleConstructorReturn(this, (HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).apply(this, arguments));
  }

  _createClass(HelloMessage, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Hello ',
        this.props.name
      );
    }
  }]);

  return HelloMessage;
}(React.Component);

var Timer = function (_React$Component2) {
  _inherits(Timer, _React$Component2);

  function Timer(props) {
    _classCallCheck(this, Timer);

    var _this2 = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

    _this2.state = { secondsElapsed: 0 };
    return _this2;
  }

  _createClass(Timer, [{
    key: 'tick',
    value: function tick() {
      this.setState(function (prevState) {
        return {
          secondsElapsed: prevState.secondsElapsed + 1
        };
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.interval = setInterval(function () {
        return _this3.tick();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Seconds Elapsed: ',
        this.state.secondsElapsed
      );
    }
  }]);

  return Timer;
}(React.Component);

var TodoApp = function (_React$Component3) {
  _inherits(TodoApp, _React$Component3);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this4 = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this4.handleChange = _this4.handleChange.bind(_this4);
    _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
    _this4.state = { items: [], text: '' };
    return _this4;
  }

  _createClass(TodoApp, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'TODO'
        ),
        React.createElement(TodoList, { items: this.state.items }),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement('input', { onChange: this.handleChange, value: this.state.text }),
          React.createElement(
            'button',
            null,
            'Add #' + (this.state.items.length + 1)
          )
        )
      );
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ text: e.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(function (prevState) {
        return {
          items: prevState.items.concat(newItem),
          text: ''
        };
      });
    }
  }]);

  return TodoApp;
}(React.Component);

var TodoList = function (_React$Component4) {
  _inherits(TodoList, _React$Component4);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'ul',
        null,
        this.props.items.map(function (item) {
          return React.createElement(
            'li',
            { key: item.id },
            item.text
          );
        })
      );
    }
  }]);

  return TodoList;
}(React.Component);

//ReactDOM.render(<HelloMessage name="John" />, mountNode);
//console.log(ReactDOMServer.renderToString(<HelloMessage/>));
//console.log(ReactDOMServer.renderToString(<Timer/>));


console.log(ReactDOMServer.renderToString(React.createElement(TodoApp, null)));

//module.export = HelloMessage;
//ReactDOM.render(<HelloMessage name="John" />, mountNode);

/*ReactDOM.render(
   <h1>Hello, world!</h1>,
   document.getElementById('example')
);*/

