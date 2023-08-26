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
const element = /*#__PURE__*/React.createElement(Welcome, null);
root.render(element);