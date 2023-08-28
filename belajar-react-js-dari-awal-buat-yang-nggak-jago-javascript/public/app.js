const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

// ===
// === DATA FETCH
// ===

// https://api.spaceflightnewsapi.net/v3/blogs

function App() {
  React.useEffect(function () {
    const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs').then(function (response) {
      console.log(typeof response);
      console.log(response);
    });
    console.log(getData);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, "Data Fetch");
}
const element = /*#__PURE__*/React.createElement(App, null);
root.render(element);