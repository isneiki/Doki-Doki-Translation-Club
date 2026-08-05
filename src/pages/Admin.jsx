import { useState } from "react";
import New from "../components/New";
import Remove from "../components/Remove";

const Admin = () => {
  const [key, setKey] = useState("");

  const onKeyChange = (e) => {
    setKey(e.target.value);
  };

  return (
    <div>
      <header>
        <h1 className="text-4xl mb-4">Painel de Admin</h1>
        {/* Chave de admin */}
        <input
          className="my-4 p-2 border-gray-800 border-2 rounded-md"
          type="text"
          name="key"
          placeholder="Chave de admin..."
          value={key}
          onChange={onKeyChange}
        />
      </header>
      <div className="flex gap-4 flex-wrap">
        <New adminKey={key}></New>
        <Remove adminKey={key}></Remove>
      </div>
    </div>
  );
};

export default Admin;
