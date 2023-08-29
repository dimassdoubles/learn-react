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
            ...edit,
            activity,
        }
        console.log(updatedTodo);

        const updatedIndex = todoList.findIndex(function(todo) {
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
        const editedIndex = todoList.findIndex(function(item) {
            return item.id == todo.id;
        })
        editedTodoList[editedIndex] = {
            ...todo, 
            done: !todo.done,
        }

        setTodoList(editedTodoList);
    }

    function addTodoHandler() {
        setTodoList([...todoList, {
            id: generateId(),
            // activity: activity,
            activity, // outputnya akan sama dengan kode di atas
            done: false,
        }]);
        console.log({todoList});
        
        setActivity("");
    }

    function removeTodoHandler(id) {
        const filteredTodos = todoList.filter(function(item) {
            return item.id != id;
        })

        setTodoList(filteredTodos);
        console.log(todoList);
        
        edit.id && cancelEditHandler();
    }

    return (
        <>
            <h1>Simple Todo List</h1>
            {message && <div style={{color: "red"}}>{message}</div>}
            <form onSubmit={saveTodoHandler}>
                <input type="text" placeholder="Nama aktifitas" value={activity} onChange={function(event) {
                    setActivity(event.target.value);
                }}></input>
                <button type="submit">
                    {edit.id ?  "Simpan" : "Tambah"}
                </button>
                {edit.id && <button onClick={cancelEditHandler}>Batal edit</button>}
            </form>

            {todoList.length > 0 ? 
            (
                <ul>
                    {todoList.map(function(item) {
                        return (
                            <li key={item.id}>
                                <input type="checkbox" checked={item.done} onChange={doneTodoHandler.bind(this, item)}></input>
                                {item.activity} {item.done ? " (Selesai)" : " (Belum selesai)"}
                                <button onClick={editButtonDiklik.bind(this, item)}>Edit</button>
                                <button onClick={removeTodoHandler.bind(this, item.id)}>Hapus</button>
                            </li> 
                        );
                    })}
                </ul>
            )
                :
            (
                <p><i>Tidak ada todo</i></p>
            )
            }
        </>
    );

}

const element = <App/>

root.render(element);