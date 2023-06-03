import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Test from './Test';

function App() {
  return (
    <BrowserRouter>
      <div className='app dark'>
        <nav>
          <div className='nav-title'>
            D3 Examples
          </div>
          <div className='nav-routes'>
            <Link to='/test'>
              test
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path='/test' element={<Test />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
