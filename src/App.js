import Header from './components/Header';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import UpButton from './components/UpButton';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <UpButton />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
