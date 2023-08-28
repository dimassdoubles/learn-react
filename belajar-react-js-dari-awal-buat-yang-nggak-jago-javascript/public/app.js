const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

// ===
// === DATA FETCH
// ===

// https://api.spaceflightnewsapi.net/v3/blogs

function App() {
  const [activity, setActivity] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  function generateId() {
    return Date.now();
  }
  function addTodoHandler(event) {
    event.preventDefault();
    console.log({
      activity
    });
    console.log({
      todoList
    });
    setTodoList([...todoList, {
      id: generateId(),
      activity: activity
    }]);
    console.log({
      todoList
    });
    setActivity("");
  }
  function removeTodoHandler(id) {
    const filteredTodos = todoList.filter(function (item) {
      return item.id != id;
    });
    setTodoList(filteredTodos);
    console.log(todoList);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama aktifitas",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todoList.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.activity, /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, item.id)
    }, "Hapus"));
  })));
}
const element = /*#__PURE__*/React.createElement(App, null);
root.render(element);