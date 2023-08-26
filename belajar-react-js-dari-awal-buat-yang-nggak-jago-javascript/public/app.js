const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
function Welcome() {
  const welcomeStyle = {
    color: "blue",
    fontSize: "23px"
  };
  return /*#__PURE__*/React.createElement("h1", {
    style: welcomeStyle
  }, "Hello World!");
}
const sayHello = () => console.log("Hello World!");
const sebutNamaku = namaku => alert(namaku);
function MyButton() {
  // return <button onClick={function() {sebutNamaku("bento")}}>Say Hello</button>
  return /*#__PURE__*/React.createElement("button", {
    onClick: sebutNamaku.bind(this, "bento")
  }, "Say Hello");
}
function MyComponent() {
  const state = React.useState(1);
  return /*#__PURE__*/React.createElement("h1", null, state);
}
const element = /*#__PURE__*/React.createElement(MyComponent, null);
root.render(element);