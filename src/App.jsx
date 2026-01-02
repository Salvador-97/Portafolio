import Navbar from "./components/Navbar.jsx";
import Secciones from './components/Secciones.jsx';

function App() {
  return (
    <>
    <Navbar />
    <main className="">
        <Secciones/>
    </main>
    <footer className="text-blanco text-center font-[600] mt-[1rem]">
        <i className="fa-solid fa-copyright pr-[0.5rem]"></i>Salvador Gutiérrez Olvera
    </footer>
    </>
  );
}

export default App;