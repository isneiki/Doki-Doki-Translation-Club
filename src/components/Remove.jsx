import { ServerContext } from "../Contexts/ServerContext";
import { useEffect, useState, useContext } from "react";
import Edit from "./Edit";

const Remove = ({ adminKey }) => {
  const { server } = useContext(ServerContext);

  // getting all translations for db var
  const [translations, setTranslations] = useState([]);
  const [search, setSearch] = useState("");

  // Editing translation
  const [isEditing, setIsEditing] = useState(null);
  const [selectedTranslation, setSelectedTranslation] = useState(null);

  const showEdit = (translation) => {
    console.log(translation);
    setIsEditing(true);
    setSelectedTranslation(translation);
  };

  // getting all translations for db

  useEffect(() => {
    const getTranslations = async () => {
      const res = await fetch(`${server}/translations/all`);
      const data = await res.json();

      setTranslations(data.translations);
    };

    getTranslations();
  }, [server]);

  const deleteTranslation = async (id) => {
    const res = await fetch(`${server}/translations/remove`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminKey}`,
      },
      body: JSON.stringify({ id: id }),
    });

    if (!res.ok) return;

    setTranslations((prev) => prev.filter((t) => t.id !== id));
  };

  let filteredTranslations = translations.filter((translation) =>
    translation.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col flex-2 gap-2 border-2 border-gray-800 rounded-sm p-4">
      <h2 className="text-2xl mb-2">Remover ou Editar Mod</h2>
      <input
        type="text"
        placeholder="buscar..."
        className="border-2 border-gray-800 px-2 py-1 rounded-md"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ol className="flex flex-col gap-2 p-4 border-gray-800 border-2 rounded-md max-h-75 overflow-y-scroll">
        {filteredTranslations.map((e) => (
          <li
            key={e.id}
            className="flex justify-between gap-4 bg-gray-800 border-gray-900 border-2 rounded-lg p-2 px-5"
          >
            <div>ID: {e.id}</div>
            <div>{e.name}</div>
            <div className="flex gap-3 items-center">
              <i
                onClick={() => deleteTranslation(e.id)}
                className="cursor-pointer fa-solid fa-trash text-red-500"
              ></i>
              {/* TODO: Implement edit functionality and remove "hidden" from classNames */}
              <i
                onClick={() => showEdit(e)}
                className="cursor-pointer fa-solid fa-pencil text-blue-500"
              ></i>
            </div>
          </li>
        ))}
      </ol>
      {isEditing && (
        <Edit
          close={() => setIsEditing(false)}
          translation={selectedTranslation}
          adminKey={adminKey}
        ></Edit>
      )}
    </div>
  );
};

export default Remove;
