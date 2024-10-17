import { useState } from "react";
import LanguageContext from "../context/LanguageContext";
import Text from "./Text";
import LanguageSwitcher from "./LanguageSwitcher";

export default function LanguageMain() {
  const [language, setLanguage] = useState("en");

  function toggleLanguage() {
    setLanguage((prevLang) => (prevLang === "en" ? "ru" : "en"));
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div  className="container">
        <Text />
        <LanguageSwitcher />
      </div>
    </LanguageContext.Provider>
  );
}
