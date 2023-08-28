const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

// ===
// === DATA FETCH
// ===

// https://api.spaceflightnewsapi.net/v3/blogs

function App() {

    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(function() {
        // const getData = fetch(('https://api.spaceflightnewsapi.net/v3/blogs').then(
        //     function(response) {
        //         return response.json();
        //     }
        // ).then(function(json) {
        //     console.log(json);
        // });
        // console.log(getData);

        async function getData() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
            console.log(request);

            const response = await request.json();
            console.log(response);

            setNews(response);
            setLoading(false);
        }
        getData();
    }, []);

    return (
        <>
            <div>Data Fetch</div>
            {loading && <i>Loading data .....</i>}
            {!loading && 
                <ul>
                    {news.map(function(item) {
                        return <li key={item.id}>{item.title}</li>
                    })}
                </ul>
            }
        </> 
    );

}

const element = <App/>

root.render(element);