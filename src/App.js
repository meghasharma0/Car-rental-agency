import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './components/Service';
import Status from './components/Status';
import BookNow from './components/BookNow';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/status' element={<Status />}></Route>
          <Route path='/booking-car' element={<BookNow />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
