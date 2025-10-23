import React, { createContext, useState, useEffect, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components"; // <-- import from styled-components
import { dark_Theme, light_Theme } from "../utils/Themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? light_Theme : dark_Theme;
  });

  useEffect(() => {
    const themeName = theme === light_Theme ? "light" : "dark";
    localStorage.setItem("theme", themeName);
    document.body.className =
      themeName === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === dark_Theme ? light_Theme : dark_Theme
    );
  };

  const currentThemeName = theme === dark_Theme ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentThemeName }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
