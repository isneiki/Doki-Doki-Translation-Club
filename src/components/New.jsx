import { ServerContext } from "../Contexts/ServerContext";
import { useContext, useRef, useState } from "react";
import Banner from "../assets/banner.png";
import Form from "./Form";

const New = ({ adminKey }) => {
  const { server } = useContext(ServerContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState("");
  const [img, setImg] = useState("");
  const [linkMobile, setLinkMobile] = useState("");
  const [linkPC, setLinkPC] = useState("");

  const [log, setLog] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${server}/translations/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminKey}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
        banner: banner,
        img: img,
        linkPC: linkPC,
        linkMobile: linkMobile,
      }),
    });

    if (!res.ok) {
      console.log(await res.text());
      return;
    }

    const data = await res.json();

    setLog(data.message);
  };

  return (
    <div className="border-2 border-gray-800 p-4 gap-2 flex flex-col rounded-md flex-1">
      <Form formName="Adicionar Mod" submit={submit} log={log}></Form>
    </div>
  );
};

export default New;
