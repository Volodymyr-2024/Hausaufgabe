import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const languageTextButton = {
    en: "Switch Language",
    ru: "Переключение языка",
  };
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button className="button" onClick={toggleLanguage}>{languageTextButton[language]}</button>
    </div>
  );
}
