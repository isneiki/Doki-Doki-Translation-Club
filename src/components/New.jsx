import { ServerContext } from "../Contexts/ServerContext";
import { useContext, useState } from "react";
import Form from "./Form";

const New = ({ adminKey }) => {
  const { server } = useContext(ServerContext);

  const [log, setLog] = useState("");

  const submit = async (body) => {
    const res = await fetch(`${server}/translations/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminKey}`,
      },
      body: JSON.stringify(body),
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
