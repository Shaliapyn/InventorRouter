import { Route, Routes } from 'react-router-dom';

import {About} from "./pages/About"
import {Home} from "./pages/Home"
import {Posts} from "./pages/Posts"
import { NotFound } from './pages/NotFound';
import Layout from './components/Layout';
import Singlpage from './pages/Singlpage';

import './App.css';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='about' element={< About />} />
          <Route index element={<Home />}/>
          <Route path="posts" element={<Posts />}/>
          <Route path='posts/:param' element={<Singlpage />}></Route>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
