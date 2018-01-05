var React = require("nervjs");
var { createElement } = React;

var App = require("./components/App");

var mountNode = document.getElementById("searchResultsMount");

if (mountNode) {
  React.render(
    <App searchResultsData={window.searchResultsData} />,
    mountNode
  );

  console.log("Re-rendering on client completed");
}

window.addBench("react", function(el, getNextSearchResults) {
  React.render(<App searchResultsData={getNextSearchResults()} />, el);

  return function(done) {
    React.render(
      <App searchResultsData={getNextSearchResults()} />,
      el,
      done
    );
  };
});
