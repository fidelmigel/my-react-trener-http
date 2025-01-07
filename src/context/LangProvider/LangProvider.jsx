import { createContext, useState } from "react";

export const LangContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("ua");
  const changeLang = () => setLang(lang === "ua" ? "en" : "ua");

  const contextValue = {
    lang,
    changeLang,
  };

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
};

export default LangProvider;
