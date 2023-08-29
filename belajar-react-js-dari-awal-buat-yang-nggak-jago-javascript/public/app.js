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
  const [message, setMessage] = React.useState("");
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
    if (!activity) {
      return setMessage("Nama aktifitas jangan kosong!");
    }
    setMessage("");
    if (edit.id) {
      editTodoHandler();
      return;
    }
    addTodoHandler();
  }
  function doneTodoHandler(todo) {
    const editedTodoList = [...todoList];
    const editedIndex = todoList.findIndex(function (item) {
      return item.id == todo.id;
    });
    editedTodoList[editedIndex] = {
      ...todo,
      done: !todo.done
    };
    setTodoList(editedTodoList);
  }
  function addTodoHandler() {
    setTodoList([...todoList, {
      id: generateId(),
      // activity: activity,
      activity,
      // outputnya akan sama dengan kode di atas
      done: false
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red"
    }
  }, message), /*#__PURE__*/React.createElement("form", {
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
  }, "Batal edit")), todoList.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todoList.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, /*#__PURE__*/React.createElement("input", {
      nput: true,
      type: "checkbox",
      onChange: doneTodoHandler.bind(this, item)
    }), item.activity, " ", item.done && " (Selesai)", /*#__PURE__*/React.createElement("button", {
      onClick: editButtonDiklik.bind(this, item)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, item.id)
    }, "Hapus"));
  })) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Tidak ada todo")));
}
const element = /*#__PURE__*/React.createElement(App, null);
root.render(element);