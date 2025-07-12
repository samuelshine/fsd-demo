import './App.css';
import Card from './components/Card';
import './images/alexa.png';
import './images/apple-intelligence.jpg';
import './images/copilot.jpg';

function App() {
  return (
    <div className="App">
      
      <div className="CardContainer">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
