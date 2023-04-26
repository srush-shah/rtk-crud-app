import { Route, Routes } from 'react-router-dom';

// CSS
import './App.css'

//Components
import Create from "./components/Create";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Create/>} />
      </Routes>
    </div>
  );
}

export default App;
