console.log("app.js is running");

// JSX - JavaScript XML - JS syntax extension

var template = (
  <div>
    <h1>Indecision App</h1> <p>This is some info</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
