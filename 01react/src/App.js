import './style/App.css';
import Footer from './components/footer';
import { Nav } from './components/nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/loging';
import { Rs } from './pages/project';
import { SignUp } from './pages/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/Product' element={<h1>Product</h1>} />
          <Route path='/Project' element={<Rs />} />
          <Route path='/Contact' element={<h1>Contact</h1>} />
          <Route path='/About' element={<h1>About</h1>} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign' element={<SignUp />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
