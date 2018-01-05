var React = require("nervjs");
var { createElement } = React;
var ReactDOMServer = require("nerv-server");

module.exports = function reactRender(App, searchResultsData) {
  return ReactDOMServer.renderToString(
    <App searchResultsData={searchResultsData} />
  );
};
