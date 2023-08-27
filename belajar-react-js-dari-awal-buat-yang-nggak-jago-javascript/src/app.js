const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);


// =====
// ===== COMPONENT LIFECYCLE =====
// =====
// function Welcome() {
//     const welcomeStyle = {
//         color: "blue",
//         fontSize: "23px"
//     }
//     return <h1 style={welcomeStyle}>Hello World!</h1>
// }

// const sayHello = () => console.log("Hello World!");
// const sebutNamaku = (namaku) => alert(namaku);

// function MyButton() {
//     // return <button onClick={function() {sebutNamaku("bento")}}>Say Hello</button>
//     return <button onClick={sebutNamaku.bind(this, "bento")}>Say Hello</button>
// }

// function MyComponent() {
//     const state = React.useState(1);

//     return <h1>{state}</h1>
// }

// function MyCounter() {
//     // const state = React.useState(0); 
    
//     // const count = state[0];
//     // const updateCount = state[1];
    
//     // karena useState mengembalikan array
//     // untuk membuat state bisa juga menggunakan 
//     // konsep destructuring array
//     const [count, setCount] = React.useState(0);

//     return (
//         <>
//             <button onClick={setCount.bind(this, count-1)}>-</button>
//             <span> {count} </span>
//             <button onClick={setCount.bind(this, count+1)}>+</button>
//         </>
//     );

// }

// // component lifecycle
// function ComponentLifecycle() {
//     const [diklik, setDiklik] = React.useState(false);
//     const [count, setCount] = React.useState(0);

//     // component did mount = render pertama kali
//     // React.useEffect(function() {}, []); => useEffect hanya akan dijalankan satu kali saja


//     // component did update = ketika komponen di update
//     React.useEffect(function() { // function ini akan dipanggil saat element dirender
//         console.log("component init");

//         // component unmount
//         // function ini akan dieksekusi jika
//         // komponen akan dihapus dari dom tree
//         // atau saat komponen dirender ulang (saat useEffect di eksekusi)
//         return function() {
//             console.log("destroy comopnent");
//         };
//     }, [count, diklik]); // argument kedua, mengatur fungsi akan dipanggil saat state x berubah


//     return (
//         <>
//             <h1 id="mama">Hello World!</h1>
//             <button onClick={function() {
//                 setDiklik(!diklik);
//             }}>Klik aku dong</button>
//             <button onClick={function() {
//                 setCount(count + 1);
//             }}>Tambah</button>
//             Nilai saat ini: {count}
//         </>
//     )
// }

// const element = <ComponentLifecycle/>;

// =====
// ===== CONDITIONAL RENDERING
// =====

function App() {
    return (
        <>
             <h1>Login dulu, Bang</h1>
             <button>Login</button>
        </>
    );
}

const element = <App/>

root.render(element);