import { useContext } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState();
  const [themeObject, setThemeObject] = useState();

  const toggleThemeHandler = (toggleTheme) => {
    setTheme(toggleTheme);
  };

  useEffect(() => {
    theme === "light"
      ? setThemeObject({
          primary: "var(--light)",
          text: "var(--text-light)",
          secondary: "var(--sec-light)",
        }) && localStorage.setItem("theme", theme)
      : setThemeObject({
          primary: "var(--dark)",
          text: "var(--text-dark)",
          secondary: "var(--sec-dark)",
        }) && localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ themeObject, theme, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
