import Navbar from './component/Navbar';
import './App.css';
import Bottom from './component/Bottom';
import Homepage from './container/Homepage';
import { Route, Routes } from 'react-router-dom';
import Collection from './component/Collection/Collection';
import Pool from './component/Pool/Pool';


function App() {
  
  return (
    <div className="App">
  <Navbar title="Econear"/>
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/collection' element={<Collection/>}></Route>
    <Route path='/pool' element={<Pool/>}></Route>
    <Route></Route>
  </Routes>
<Bottom/>
    </div>
  );

}

export default App;
