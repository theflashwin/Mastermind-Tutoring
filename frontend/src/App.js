import {BrowserRouter, Routes, Route} from 'react-router-dom'
import '../src/css/styles.css'
import Navbar from "./components/MyNavbar"
import Home from './components/Home';
import Recovery from './components/userfrontend/Recovery'
import Register from './components/userfrontend/Register'
import Username from './components/userfrontend/Username'
import Password from './components/userfrontend/Password';
import Reset from './components/userfrontend/Reset';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route index path = "/" element={<Home/>}/>
        <Route path = "/portal" element={<Home/>}/>
        <Route path='/recovery' element={<Recovery/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Username/>}/>
        <Route path='/password' element={<Password/>}/>
        <Route path='/reset' element={<Reset/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 