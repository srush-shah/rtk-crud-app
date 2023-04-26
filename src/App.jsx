import { Route, Routes } from 'react-router-dom';

// CSS
import './App.css'

//Components
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Create/>} />
        <Route exact path='/read' element={<Read/>} />
        <Route exact path='/edit/:id' element={<Update/>} />
      </Routes>
    </div>
  );
}

export default App;
