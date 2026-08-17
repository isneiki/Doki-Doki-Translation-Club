import sayori from "../assets/sayori.png";
import yuri from "../assets/yuri.png";
import { useContext, useEffect, useState } from "react";
import Translation from "../components/Translation";
import { ServerContext } from "../Contexts/ServerContext";

const Translations = () => {
  const { server } = useContext(ServerContext);

  const [translations, setTranlations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadAll() {
      const res = await fetch(`${server}/translations/all`);
      const data = await res.json();

      setTranlations(data.translations);
    }

    loadAll();
  }, []);

  let filteredTranslations = translations.filter((translation) =>
    translation.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-row items-center justify-center gap-3">
        <img src={sayori} alt="Sayori" className="w-28 hidden md:block" />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-6xl">Traduções</h1>
          <p className="w-64 text-center">
            Nossa vasta coleção de traduções. Sem uso de IA. De humanos para
            humanos.
          </p>
          <div className="border-b-2 border-pink-400 w-64 my-4"></div>
          <input
            type="text"
            placeholder="Buscar Tradução..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              filteredTranslations = translations.filter((translation) =>
                translation.name.toLowerCase().includes(search.toLowerCase()),
              );
            }}
            className="mt-2 border-2 py-2 px-3 border-gray-900 rounded-md"
          />
        </div>
        <img src={yuri} alt="Yuri" className="w-32 hidden md:block" />
      </header>
      <main className="flex flex-wrap gap-6 justify-center p-4">
        {filteredTranslations.map((e) => (
          <Translation
            key={e.id}
            name={e.name}
            description={e.description}
            banner={e.banner}
            img={e.image}
            linkPC={e.linkPC}
            linkMobile={e.linkMobile}
          ></Translation>
        ))}
      </main>
    </div>
  );
};

export default Translations;
