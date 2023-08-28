const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

// ===
// === DATA FETCH
// ===

// https://api.spaceflightnewsapi.net/v3/blogs

function App() {
    React.useEffect(function() {
        const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs').then(
            function(response) {
                console.log(typeof response);
                console.log(response);
            }
        );
        console.log(getData);
    }, []);

    return <div>Data Fetch</div>;

}

const element = <App/>

root.render(element);