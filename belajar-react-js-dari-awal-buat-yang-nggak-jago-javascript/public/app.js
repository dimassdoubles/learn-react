const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

// ===
// === DATA FETCH
// ===

// https://api.spaceflightnewsapi.net/v3/blogs

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(function () {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, "Data Fetch"), /*#__PURE__*/React.createElement("ul", null, news.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.title);
  })));
}
const element = /*#__PURE__*/React.createElement(App, null);
root.render(element);