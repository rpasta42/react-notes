var React = require('react')
var Root = require('./test.js')

function render(locals) { //, callback) {
   //var html = '<!DOCTYPE html>' + React.renderToStaticMarkup(React.createElement(Root, locals));
   console.log(Root);
   //callback(null,  html);
   //return html;
}
module.exports = render;

console.log(render());
