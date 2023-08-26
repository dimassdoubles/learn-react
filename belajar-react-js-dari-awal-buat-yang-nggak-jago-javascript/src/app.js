const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

function Welcome() {
    const welcomeStyle = {
        color: "blue",
        fontSize: "23px"
    }
    return <h1 style={welcomeStyle}>Hello World!</h1>
}

const element = <Welcome/>;


root.render(element);