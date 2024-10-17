import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

export default function Text() {
  const TextLanguage = {
    en: "English language was chosen",
    ru: "Выбран русский язык",
  };
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <h1 className="text">{TextLanguage[language]}</h1>
    </div>
  );
}
