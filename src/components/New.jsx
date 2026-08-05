import { useRef, useState } from "react";
import Banner from "../assets/banner.png";

const New = ({ adminKey }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState("");
  const [img, setImg] = useState("");
  const [linkMobile, setLinkMobile] = useState("");
  const [linkPC, setLinkPC] = useState("");

  const [log, setLog] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://dokidokitranslationclub.squareweb.app/translations/new",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
          banner: banner,
          img: img,
          linkPC: linkPC,
          linkMobile: linkMobile,
          adminKey: adminKey,
        }),
      },
    );

    if (!res.ok) {
      console.log(await res.text());
      return;
    }

    const data = await res.json();

    setLog(data.message);
  };

  return (
    <form
      onSubmit={submit}
      className="border-2 border-gray-800 p-4 gap-2 flex flex-col rounded-md flex-1"
    >
      <h2 className="text-2xl mb-2">Adicionar Mod</h2>
      <label htmlFor="name">
        Nome do mod: <span className="text-red-400">*</span>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="border-2 border-gray-800 px-2 py-1 rounded-md"
        placeholder="Gay Gay Lesbian Club"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="description">
        Descrição (curta): <span className="text-red-400">*</span>
      </label>
      <textarea
        name="description"
        id="description"
        className="border-2 border-gray-800 px-2 py-1 rounded-md"
        placeholder="Mod muito legal, bah"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <label htmlFor="banner">Link do banner:</label>
      <input
        type="text"
        name="banner"
        id="banner"
        className="border-2 border-gray-800 px-2 py-1 rounded-md"
        placeholder="Opcional (caso não tenha valor, usa o banner default)"
        value={banner}
        onChange={(e) => setBanner(e.target.value)}
      />
      <label htmlFor="img">
        Link do ícone: <span className="text-red-400">*</span>
      </label>
      <input
        type="text"
        name="img"
        id="img"
        className="border-2 border-gray-800 px-2 py-1 rounded-md"
        placeholder="http://media.discordapp.net/blahblahblah"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <label htmlFor="linkPC">
        Link de download PC: <span className="text-red-400">*</span>
      </label>
      <input
        type="text"
        name="linkPC"
        id="linkPC"
        className="border-2 border-gray-800 px-2 py-1 rounded-md"
        placeholder="https://mediafire.com/blah"
        value={linkPC}
        onChange={(e) => setLinkPC(e.target.value)}
      />
      <label htmlFor="linkMobile">Link de download Mobile (se houver):</label>
      <input
        type="text"
        name="linkMobile"
        id="linkMobile"
        className="border-2 border-gray-800 px-2 py-1 rounded-md"
        placeholder="http://media.discordapp.net/blahblahblah"
        value={linkMobile}
        onChange={(e) => setLinkMobile(e.target.value)}
      />
      <input className="mt-4 primary-btn" type="submit" value="enviar" />
      <p>Status: {log}</p>
    </form>
  );
};

export default New;
