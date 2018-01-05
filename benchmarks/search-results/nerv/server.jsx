var React = require("nervjs");
var { createElement } = React;
var ReactDOMServer = require("nerv-server");

var App = require("./components/App");

module.exports = function(getNextSearchResults) {
  return function benchFn() {
    var html = ReactDOMServer.renderToString(
      <App searchResultsData={getNextSearchResults()} />
    );

    return html;
  };
};
