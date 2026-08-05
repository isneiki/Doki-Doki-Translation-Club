import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Translations from "./pages/Translations";
import About from "./pages/About";
import Admin from "./pages/Admin";
import icon from "./assets/logo.png";

const App = () => {
  return (
    <div className="min-h-dvh flex flex-col text-white">
      <header>
        <nav
          className="flex justify-between items-center
                      py-3 px-4 md:px-8
                      bg-dark
                      text-lg *:mt-2 md:*:mt-0"
        >
          <Link to="/" className="flex gap-3 items-center">
            <img className="w-10" src={icon} alt="Logo" />
            <h2 className="text-xl">DDTC</h2>
          </Link>
          <div>
            <ul className="flex gap-4 md:gap-6">
              <li>
                <Link to="/" className="text-xl">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/translations" className="text-xl">
                  Traduções
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xl">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden">
            <button className="primary-btn">Login</button>
          </div>
        </nav>
      </header>

      <main className="flex-1 p-2 bg-light py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translations" element={<Translations />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </main>

      <footer className="bg-dark h-12">
        <div className="flex justify-evenly items-center h-full">
          <p>
            Criado por{" "}
            <a
              href="https://github.com/thaleskaua66/"
              target="_blank"
              className="underline"
            >
              Kauã Thalison
            </a>{" "}
            com muito 💗
          </p>
          <p>&copy;{new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
