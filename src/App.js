import './App.css';

import { Navigation } from './components/Navigation'
import { Gallery } from './components/Gallery'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {
  return (
    <div>
      <Navigation/>
      <About/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
