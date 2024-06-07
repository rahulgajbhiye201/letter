"use client";

import { createContext, useState, useContext } from "react";

const UrlContext = createContext({
  url: "",
  updateUrl: (data: string) => {},
});

export const UrlProvider = ({ children }: any) => {
  const [url, setUrl] = useState<string>("");

  function updateUrl(data: string) {
    setUrl(data);
  }

  return (
    <UrlContext.Provider value={{ url, updateUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

export const useUrl = () => {
  return useContext(UrlContext);
};
