import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { lng, setLng } = useState("en");
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    changeLanguage(value);
    setLng(value);
  };
 
  return (
    <div>
      <select value={lng} onChange={handleChange}>
        <option value={"en"}>En</option>
        <option value={"ru"}>Ru</option>
      </select>

      <h1>{t("text1")}</h1>
    </div>
  );
};

export default App;
