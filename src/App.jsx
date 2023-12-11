import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/UI/Footer';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
