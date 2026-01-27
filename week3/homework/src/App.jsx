import ThemeProvider from "./app/providers/ThemeProvider.jsx";
import MainPage from "./pages/MainPage.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
