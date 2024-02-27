
import './App.css';
import Bootom from './component/Bootomtext/Bootom';
import Navbar from './component/Navbar/Navbar';
import Card from './component/Cards/Card';
import { Cardsec } from './component/Cardsec/Cardsec';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div  className="App">
 <Navbar />
 <Bootom />
<Card />
<Cardsec />
<Footer />
    </div>
  );
}

export default App;
