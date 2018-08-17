console.log("App.js töötab!");

// Template

const app = {
  title: "Otsustamis App!",
  subtitle:
    "Kirjuta siia asjad, mille vahel sa ei suuda otsutada ja vajuta nuppu.",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        Mida ma peaks tegema?
      </button>
      <button onClick={onRemoveAll}>Kustuta</button>
      <p>
        {app.options.length > 0 ? "Siin on su valikud" : "Pole midagi lisatud"}
      </p>
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Lisa</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
