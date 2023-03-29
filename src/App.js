// Css
import './App.css';

// Arquivos
import Nav from './componets/Nav';
import Main from './componets/Main';
import Footer from './componets/Footer';


function App() {
  return (
    <div className='app-content'>
      <div className="app">
        <Nav />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
