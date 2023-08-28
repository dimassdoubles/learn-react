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

    function editTodoHandler(todo) {
        console.log(todo);
        setActivity(todo.activity);

    }

    function saveTodoHandler(event) {
        event.preventDefault();

        console.log("Disimpan, mak");
        
        if (edit.id) {
            editTodoHandler(edit);
        } else {
            addTodoHandler();
        }
    }

    function addTodoHandler() {
        console.log({activity});
        console.log({todoList});

        setTodoList([...todoList, {
            id: generateId(),
            // activity: activity,
            activity, // outputnya akan sama dengan kode di atas
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
    }

    return (
        <>
            <h1>Simple Todo List</h1>
            <form onSubmit={saveTodoHandler}>
                <input type="text" placeholder="Nama aktifitas" value={activity} onChange={function(event) {
                    setActivity(event.target.value);
                }}></input>
                <button type="submit">
                    {edit.id ?  "Simpan" : "Tambah"}
                </button>
            </form>

            <ul>
                {todoList.map(function(item) {
                    return (
                        <li key={item.id}>
                            {item.activity} 
                            <button onClick={editTodoHandler.bind(this, item)}>Edit</button>
                            <button onClick={removeTodoHandler.bind(this, item.id)}>Hapus</button>
                        </li> 
                    );
                })}
            </ul>
        </>
    );

}

const element = <App/>

root.render(element);