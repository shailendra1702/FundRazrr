import {BrowserRouter,Routes,Route} from "react-router-dom";
import {ThemeProvider } from '@mui/system';
import Home from "./components/copy2";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <div className="App">
       <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />
          
      </Routes>
    </BrowserRouter>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
