import Navbar from './component/Navbar';
import './App.css';
import Bottom from './component/Bottom';
import Homepage from './container/Homepage';

  
function App() {
  
  return (
    <div className="App">
  <Navbar title="Econear"/>
<Homepage />
<Bottom/>
    </div>
  );

}

export default App;
