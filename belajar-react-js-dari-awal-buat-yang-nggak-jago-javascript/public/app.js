const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

// ===
// === DATA FETCH
// ===

// https://api.spaceflightnewsapi.net/v3/blogs

function App() {
  const [activity, setActivity] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  function generateId() {
    return Date.now();
  }
  function editButtonDiklik(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }
  function editTodoHandler() {
    console.log("Diedit, mak");
    const updatedTodo = {
      id: edit.id,
      activity
    };
    console.log(updatedTodo);
    const updatedIndex = todoList.findIndex(function (todo) {
      return todo.id == edit.id;
    });
    console.log(updatedIndex);
    const updatedTodoList = [...todoList];
    updatedTodoList[updatedIndex] = updatedTodo;
    setTodoList(updatedTodoList);
    setEdit({});
    setActivity('');
  }
  function cancelEditHandler() {
    console.log("Cancel edit mak");
    setActivity('');
    setEdit({});
  }
  function saveTodoHandler(event) {
    event.preventDefault();
    console.log("Disimpan, mak");
    if (edit.id) {
      editTodoHandler();
      return;
    }
    addTodoHandler();
  }
  function addTodoHandler() {
    console.log("Ditambah, mak");
    console.log({
      activity
    });
    console.log({
      todoList
    });
    setTodoList([...todoList, {
      id: generateId(),
      // activity: activity,
      activity // outputnya akan sama dengan kode di atas
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
    edit.id && cancelEditHandler();
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama aktifitas",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? "Simpan" : "Tambah"), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "Batal edit")), /*#__PURE__*/React.createElement("ul", null, todoList.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.activity, /*#__PURE__*/React.createElement("button", {
      onClick: editButtonDiklik.bind(this, item)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, item.id)
    }, "Hapus"));
  })));
}
const element = /*#__PURE__*/React.createElement(App, null);
root.render(element);