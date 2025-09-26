import React, { createContext, useState, useContext, useEffect } from "react";
import { useColorScheme } from "react-native";
import { THEMES } from "../constants/themes";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme();
  const [themeName, setThemeName] = useState(systemScheme);

  useEffect(() => {
    setThemeName(systemScheme);
  }, [systemScheme]);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };
  
  const theme = THEMES[themeName];

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);