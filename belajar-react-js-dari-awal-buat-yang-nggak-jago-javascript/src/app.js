const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

function Welcome() {
    const welcomeStyle = {
        color: "blue",
        fontSize: "23px"
    }
    return <h1 style={welcomeStyle}>Hello World!</h1>
}

const sayHello = () => console.log("Hello World!");
const sebutNamaku = (namaku) => alert(namaku);

function MyButton() {
    // return <button onClick={function() {sebutNamaku("bento")}}>Say Hello</button>
    return <button onClick={sebutNamaku.bind(this, "bento")}>Say Hello</button>
}

function MyComponent() {
    const state = React.useState(1);

    return <h1>{state}</h1>
}

const element = <MyComponent/>;


root.render(element);