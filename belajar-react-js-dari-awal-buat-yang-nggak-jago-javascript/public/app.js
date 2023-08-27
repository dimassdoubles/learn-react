const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
function Welcome() {
  const welcomeStyle = {
    color: "blue",
    fontSize: "23px"
  };
  return /*#__PURE__*/React.createElement("h1", {
    style: welcomeStyle
  }, "Hello World!");
}
const sayHello = () => console.log("Hello World!");
const sebutNamaku = namaku => alert(namaku);
function MyButton() {
  // return <button onClick={function() {sebutNamaku("bento")}}>Say Hello</button>
  return /*#__PURE__*/React.createElement("button", {
    onClick: sebutNamaku.bind(this, "bento")
  }, "Say Hello");
}
function MyComponent() {
  const state = React.useState(1);
  return /*#__PURE__*/React.createElement("h1", null, state);
}
function MyCounter() {
  // const state = React.useState(0); 

  // const count = state[0];
  // const updateCount = state[1];

  // karena useState mengembalikan array
  // untuk membuat state bisa juga menggunakan 
  // konsep destructuring array
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: setCount.bind(this, count - 1)
  }, "-"), /*#__PURE__*/React.createElement("span", null, " ", count, " "), /*#__PURE__*/React.createElement("button", {
    onClick: setCount.bind(this, count + 1)
  }, "+"));
}

// component lifecycle
function ComponentLifecycle() {
  const [diklik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(function () {
    // function ini akan dipanggil saat element dirender
    console.log(document.getElementById('mama'));
    console.log("Mama aku dirender");
  }, [count]); // argument kedua, mengatur fungsi akan dipanggil saat state x berubah

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "mama"
  }, "Hello World!"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setDiklik(!diklik);
    }
  }, "Klik aku dong"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "Tambah"), "Nilai saat ini: ", count);
}
const element = /*#__PURE__*/React.createElement(ComponentLifecycle, null);
root.render(element);