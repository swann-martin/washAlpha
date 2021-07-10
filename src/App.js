import logo from './logo.svg';
import './App.scss';
import Nav from './components/Nav';
import Form from './components/Form';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Form />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main"></main>
    </div>
  );
};

export default App;
