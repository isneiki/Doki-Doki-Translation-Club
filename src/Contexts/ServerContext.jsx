import { createContext, useState } from "react";

export const ServerContext = createContext(null);

export function ServerProvider({ children }) {
  // dev note: Change to https://dokidokitranslationclub.squareweb.app/api when deploying
  const [server, setServer] = useState(import.meta.env.VITE_SERVER);

  return (
    <ServerContext.Provider value={{ server, setServer }}>
      {children}
    </ServerContext.Provider>
  );
}
