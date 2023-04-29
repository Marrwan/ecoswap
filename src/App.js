import Navbar from './component/Navbar';
import './App.css';
import Bottom from './component/Bottom';
import Homepage from './container/Homepage';
import { Route, Routes } from 'react-router-dom';
import Collection from './component/Collection/Collection';
import NFT from './component/Collection/NFT';
import Monke from './images/GenZ Monke.png';


function App() {
  
  return (
    <div className="App">
  <Navbar title="Econear"/>
  <Routes>
    {/* <Route path='/' Component={Homepage}></Route> */}
    {/* <Route path='/' element={<NFT monke={Monke} title="lorem ipsum"/>}></Route> */}
    <Route path='/' element={<Collection/>}></Route>
    <Route></Route>
    <Route></Route>
  </Routes>
<Bottom/>
    </div>
  );

}

export default App;
