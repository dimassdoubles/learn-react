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

function MyCounter() {
    // const state = React.useState(0); 
    
    // const count = state[0];
    // const updateCount = state[1];
    
    // karena useState mengembalikan array
    // untuk membuat state bisa juga menggunakan 
    // konsep destructuring array
    const [count, setCount] = React.useState(0);

    return (
        <>
            <button onClick={setCount.bind(this, count-1)}>-</button>
            <span> {count} </span>
            <button onClick={setCount.bind(this, count+1)}>+</button>
        </>
    );

}

const element = <MyCounter/>;


root.render(element);