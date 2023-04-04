import Navbar from './component/Navbar';
import MonkeList from './component/MonkeList';
import Menu from './component/Menu';
import Ecoswap from './component/Ecoswap';
import './App.css';

  
function App() {
  
  return (
    <div className="App">
  <Navbar title="Econear"/>
<div style={{'padding' : '0 40px' }}>
  <Menu />
  <MonkeList />
  <Ecoswap />
</div>

    </div>
  );

}

export default App;
