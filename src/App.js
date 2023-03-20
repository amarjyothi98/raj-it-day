import './App.css';
import Login from './components/screens/Auth/Login';
import Register from './components/screens/Auth/Register';
import AddReview from './components/screens/User/AddReview';
import Home from './components/screens/home/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Confirm from './components/screens/User/Confirm';
import Profile from './components/screens/User/Profile';
import Details from './components/screens/Auth/Details';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/addreview' element={<AddReview/>} />
        <Route path='/confirm' element={<Confirm/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/details' element={<Details/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
