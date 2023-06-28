import AddForm from './components/AddForm'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowData from './components/ShowData';
import Edit from './components/Edit';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddForm/>}></Route>
      <Route path="/show" element={<ShowData/>}></Route>
      <Route path="/edit" element={<Edit/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
