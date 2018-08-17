"use strict";

console.log("App.js töötab!");

// Template

var app = {
  title: "Otsustamis App!",
  subtitle: "Kirjuta siia asjad, mille vahel sa ei suuda otsutada ja vajuta nuppu.",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "Mida ma peaks tegema?"
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Kustuta"
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Siin on su valikud" : "Pole midagi lisatud"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Lisa"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
