import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import data from './data/index';
import Nav from './components/Nav';
import Form from './components/Form';
import UserSettings from './components/UserSettings';
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Nav settings={isOpen} toggleOpen={toggleOpen} />
        {isOpen && <UserSettings />}
        <Form />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <h2 className="machines-title">Nos machines populaires</h2>
        <section className="machines">
          {data.map((machine) => (
            <div key={machine.id} className="machines-element">
              <img
                className="machines-element-picture"
                src={machine.picture}
                alt={machine.name}
              />
              <p className="machines-element-description">
                {machine.description}
                <p>
                  <i class="fas fa-heart"></i> {machine.likes}e{' '}
                </p>
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
