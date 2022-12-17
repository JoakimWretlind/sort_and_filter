import { ThemeProvider } from "styled-components";
import { Navbar } from "./components/navbar";
import { Filter01, Sort01 } from "./pages";
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
          <Route path="/filter01" element={<Filter01 />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
