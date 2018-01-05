var React = require('nervjs');
var { createElement } = React
var ReactDOMServer = require('nerv-server');

var App = require('./components/App');

module.exports = function(colors) {
    return function benchFn() {

        var html = ReactDOMServer.renderToString(
                <App colors={colors}/>);

        return html;
    };
};