const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

// ===
// === REACT LIST
// ===

function App() {
    const fruits = [
        'Apple',
        'Orang',
        'Grape',
        'Lengkeng',
    ]

    return (
        <ul>
        
            {fruits.map(function(fruit) {
                return <li key={fruits}>{fruit}</li>;
            })}
        
        </ul>
    );
}

const element = <App/>

root.render(element);