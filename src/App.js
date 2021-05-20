import GlobalStyle from "./styles/global";

import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./hooks";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />  
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
