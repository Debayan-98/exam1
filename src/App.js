import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {AddUser} from './components/AddUser'
import {AllUser} from './components/AllUser'
import {Home} from './components/Home'
import {Notfound} from './components/Notfound'
import  {Navbar}  from './components/Navbar';
import { Edituser } from './components/Edituser';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add-user" element={<AddUser />}/>
          <Route path="/all-user" element={<AllUser />}/>
          <Route path="/edit-user/:id" element={<Edituser />} />
          <Route path="*" element={<Notfound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
