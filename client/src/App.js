import './App.css';
import Routers from './components/Routers/Routes';
import {
  BrowserRouter,
  
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routers/>
    </BrowserRouter>
  );
}

export default App;
