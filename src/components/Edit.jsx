import { ServerContext } from "../Contexts/ServerContext";
import { useState, useContext } from "react";
import Form from "./Form";

const Edit = ({ translation, adminKey, close }) => {
  const { server } = useContext(ServerContext);

  const [log, setLog] = useState("");

  const submit = async (body) => {
    const res = await fetch(`${server}/translations/edit/${body.id}`, {
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
    <div className="fixed inset-0 h-dvh w-full z-1 bg-white/10 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-gray-700 w-lg p-4 flex flex-col rounded-md relative scale-80">
        <i
          className="fa-solid fa-x mb-4 text-2xl self-end cursor-pointer"
          onClick={close}
        ></i>
        <Form
          formName="Editar Mod"
          submit={submit}
          preload={translation}
          log={log}
        ></Form>
      </div>
    </div>
  );
};

export default Edit;
