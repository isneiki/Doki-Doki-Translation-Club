import { Routes, Route, Link } from "react-router-dom";
import dokis from "../assets/dokis.png";
import Translation from "../components/Translation";
import banner from "../assets/banner.png";
import icon from "../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { ServerContext } from "../Contexts/ServerContext";

const Home = () => {
  const { server } = useContext(ServerContext);

  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    async function loadPopulars() {
      const res = await fetch(`${server}/translations/popular`);
      const data = await res.json();

      setPopulars(data.translations);
    }

    loadPopulars();
  }, []);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <header className="flex flex-col items-center gap-2">
        <img src={dokis} className="w-64 md:w-84" />
        <h1 className="text-[1.6rem] md:text-4xl font-bold">
          Doki Doki Translation Club
        </h1>
        <p className="text-xl">Traduções de humanos para humanos</p>
        <Link to="/translations">
          <input
            type="text"
            placeholder="Buscar Tradução..."
            className="mt-2 border-2 py-2 px-3 border-gray-900 rounded-md"
          />
        </Link>
        <div className="mt-2 flex gap-2">
          <Link to="/about" className="primary-btn">
            Nossa Equipe
          </Link>
          <Link to="/translations" className="secondary-btn">
            Todas Traduções
          </Link>
        </div>
      </header>
      <div className="border-b-2 border-pink-400 w-64 my-4"></div>
      <h2 className="text-3xl mb-4">Escolhas Populares</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {populars.map((e) => (
          <Translation
            name={e.name}
            description={e.description}
            banner={e.banner}
            img={e.image}
            linkPC={e.linkPC}
            linkMobile={e.linkMobile}
          ></Translation>
        ))}
      </div>
    </div>
  );
};

export default Home;
