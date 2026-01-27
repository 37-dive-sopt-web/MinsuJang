import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import theme from "../../styles/theme.js";

const ThemeProvider = ({ children }) => {
  return (
    <EmotionThemeProvider theme={theme}>
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
