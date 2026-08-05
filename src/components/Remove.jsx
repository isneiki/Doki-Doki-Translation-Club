import { useEffect, useState } from "react";
import Translation from "./Translation";

const Remove = ({ adminKey }) => {
  const [translations, setTranslations] = useState([]);

  const getTranslations = async () => {
    const res = await fetch(
      "https://dokidokitranslationclub.squareweb.app/translations/all",
    );
    const data = await res.json();

    setTranslations(data.translations);
  };

  useEffect(() => {
    getTranslations();
  }, []);

  const deleteTranslation = async (id) => {
    const res = await fetch(
      "https://dokidokitranslationclub.squareweb.app/translations/remove",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, adminKey }),
      },
    );

    if (!res.ok) return;

    setTranslations((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="flex flex-col flex-2 gap-2 border-2 border-gray-800 rounded-sm p-4">
      <h2 className="text-2xl mb-2">Remover Mod</h2>
      {/* TODO: ADICIONAR BUSCA */}
      {/* <input
        type="text"
        placeholder="buscar..."
        className="border-2 border-gray-800 px-2 py-1 rounded-md"
      /> */}
      <ol className="flex flex-col gap-2 p-4 border-gray-800 border-2 rounded-md max-h-75 overflow-y-scroll">
        {translations.map((e) => (
          <li
            key={e.id}
            className="flex justify-between gap-4 bg-gray-800 border-gray-900 border-2 rounded-lg p-2 px-5"
          >
            <div>{e.id}</div>
            <div>{e.name}</div>
            <button
              onClick={() => deleteTranslation(e.id)}
              className="cursor-pointer"
            >
              🗑️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Remove;
