import { ThemeProvider } from "styled-components";
import { Navbar } from "./components/navbar";
import { Search01, Sort01 } from "./pages";
import { GlobalStyle, searchTheme } from "./styles/globalStyle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={searchTheme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Sort01 data={[]} />} />
          <Route path="/search01" element={<Search01 />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
