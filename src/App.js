import {HashRouter,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Basic from './basic';
import Education from './education';
import Skills from './skill';
import Experience from './experience';
import ViewAll from './viewall';
import AdminLogin from './login';


function App() {
  return (
    <HashRouter>
      <ul className='bg-dark'>
        
        <li><Link to="/" className='text-decoration-none text-white'>Basic </Link></li>
        <li><Link to="/education" className='text-decoration-none text-white'>Education </Link></li>
        <li><Link to="/skill" className='text-decoration-none text-white'>Skills </Link></li>
        <li><Link to="/experience" className='text-decoration-none text-white'>Experience </Link></li>
        <li><Link to="/view" className='text-decoration-none text-white'>ViewAll</Link></li>
        <li><Link to="/login" className='text-decoration-none text-white'>HR Login</Link></li>
      </ul>
      <Routes>
      <Route exact path='/login' element={<AdminLogin/>}/>
        <Route exact path='/' element={<Basic/>}/>
        <Route exact path='/education' element={<Education/>}/>
        <Route exact path='/skill' element={<Skills/>}/>
        <Route exact path='/experience' element={<Experience/>}/>
        <Route exact path='/view' element={<ViewAll/>}/>
      </Routes>
    </HashRouter>
    
  );
}

export default App;
