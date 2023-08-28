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

        console.log({nama});

    }

    return (
        <form onSubmit={ketikaSubmit}>
            <div>
                <label>Nama: </label>
                {/* <input type="text" name="nama" ref={namaRef}> */}
                <input type="text" name="nama" value={nama} onChange={function(event) {
                    console.log(event.target.value);

                    setNama(event.target.value);
                }}>
                </input>
            </div>
            <button type="submit">Kirim</button>
        </form>
    );
}

const element = <App/>

root.render(element);