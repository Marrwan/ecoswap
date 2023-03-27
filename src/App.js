import Navbar from './component/Navbar';
import MonkeList from './component/MonkeList';
import Menu from './component/Menu';

import './App.css';

  
function App() {
  
  return (
    <div className="App">
  <Navbar title="Econear"/>
  <Menu />
  <MonkeList />

    </div>
  );

}

export default App;
