var React = require("nervjs");
var { createElement } = React;
var ReactDOMServer = require("nerv-server");

module.exports = function reactRender(App, colors) {
  return ReactDOMServer.renderToString(<App colors={colors} />);
};
