const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

// ===
// === REACT LIST
// ===

function App() {
  const fruits = ['Apple', 'Orang', 'Grape', 'Lengkeng'];
  return /*#__PURE__*/React.createElement("ul", null, fruits.map(function (fruit) {
    return /*#__PURE__*/React.createElement("li", {
      key: fruits
    }, fruit);
  }));
}
const element = /*#__PURE__*/React.createElement(App, null);
root.render(element);