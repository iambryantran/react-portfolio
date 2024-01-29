import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
};

export default App;
