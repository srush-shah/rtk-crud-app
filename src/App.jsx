import { Route, Routes } from 'react-router-dom';

// CSS
import './App.css'

//Components
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Read from './components/Read';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Create/>} />
        <Route exact path='/read' element={<Read/>} />
      </Routes>
    </div>
  );
}

export default App;
