import { useContext, createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const prefTheme = localStorage.getItem("theme") || "light";
  const prefThemeObject =
    prefTheme === "light"
      ? {
          primary: "var(--light)",
          text: "var(--text-light)",
          secondary: "var(--sec-light)",
        }
      : {
          primary: "var(--dark)",
          text: "var(--text-dark)",
          secondary: "var(--sec-dark)",
        };

  const [theme, setTheme] = useState(prefTheme);
  const [themeObject, setThemeObject] = useState(prefThemeObject);

  const toggleThemeHandler = (toggleTheme) => {
    setTheme(toggleTheme);
  };

  useEffect(() => {
    setThemeObject(
      theme === "light"
        ? {
            primary: "var(--light)",
            text: "var(--text-light)",
            secondary: "var(--sec-light)",
          }
        : {
            primary: "var(--dark)",
            text: "var(--text-dark)",
            secondary: "var(--sec-dark)",
          }
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ themeObject, theme, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
