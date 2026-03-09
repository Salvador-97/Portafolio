import Navbar from "./components/Navbar.jsx";
import Secciones from './components/Secciones.jsx';
import Footer from "./components/Footer.jsx";
import clsx from "clsx";

function App() {
  return (
    <div className="flex flex-col min-h-dvh overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex-col">
        <Secciones />
      </main>
      <footer className={clsx(
        " text-blanco bg-[#0f0b17] font-[600] mt-[1rem] flex flex-col justify-between"
      )}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;