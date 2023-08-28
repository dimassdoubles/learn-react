const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

// ===
// === REACT FORM
// ===

function App() {
  // const namaRef = React.useRef(null); => uncontrolled component

  const [nama, setNama] = React.useState('Dimas Saputro');
  function ketikaSubmit(event) {
    event.preventDefault(); // mencegah pindah halaman ketika form di submit
    console.log("Aku disubmit, mama");

    // const nama = namaRef.current.value;
    // console.log("Namaku: ", nama);

    console.log({
      nama
    });
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: ketikaSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    value: nama,
    onChange: function (event) {
      console.log(event.target.value);
      setNama(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}
const element = /*#__PURE__*/React.createElement(App, null);
root.render(element);