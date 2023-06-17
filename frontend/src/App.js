import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/copy2";
import Tiles from "./components/tiles";
import BlockchainFormPage from "./components/campaignForm/campaignForm";
import {ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
      <ThemeProvider theme = {theme}>
      <div className="App">
       
       <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          {/* <Route path = "/form" element={<BlockchainFormPage />} /> */}
      </Routes>
    </BrowserRouter>

    </div>
    </ThemeProvider>

    
  );
}

export default App;
