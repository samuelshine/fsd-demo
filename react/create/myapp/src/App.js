import './App.css';
import Card from './components/Card.js';

import AppleIntelligenceLogo from './images/apple-intelligence.png';
import GeminiLogo from './images/gemini.png';
import CopilotLogo from './images/copilot.png';

function App() {
  return (
    <div className="App">
      <div className="text-4xl text-center font-extrabold font-sans">
        Personal Digital Assistants
        <div className="flex flex-wrap justify-center gap-4">
          <Card image={AppleIntelligenceLogo} title={"Apple Intelligence"} handle={"@apple"}/>
          <Card image={GeminiLogo} title={"Google Gemini"} handle={"@google"}/>
          <Card image={CopilotLogo} title={"Microsoft Copilot"} handle={"@microsoft"}/>
        </div>
      </div>
    </div>
  );
}

export default App;
