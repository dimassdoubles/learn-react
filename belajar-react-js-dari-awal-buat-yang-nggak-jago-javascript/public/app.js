const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

// ===
// === DATA FETCH
// ===

// https://api.spaceflightnewsapi.net/v3/blogs

function App() {
  const [activity, setActivity] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  function addTodoHandler(event) {
    event.preventDefault();
    console.log({
      activity
    });
    console.log({
      todoList
    });
    setTodoList([...todoList, activity]);
    console.log({
      todoList
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama aktifitas",
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todoList.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item
    }, item);
  })));
}
const element = /*#__PURE__*/React.createElement(App, null);
root.render(element);