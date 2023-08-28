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
        console.log({activity});
        console.log({todoList});

        setTodoList([...todoList, activity]);
        console.log({todoList});
    }

    return (
        <>
            <h1>Simple Todo List</h1>
            <form onSubmit={addTodoHandler}>
                <input type="text" placeholder="Nama aktifitas" onChange={function(event) {
                    setActivity(event.target.value);
                }}></input>
                <button type="submit">Tambah</button>
            </form>

            <ul>
                {todoList.map(function(item) {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </>
    );

}

const element = <App/>

root.render(element);