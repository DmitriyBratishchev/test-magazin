import React from 'react';
import './app.css';
import NavBar from './components/ui/navBar/navBar';
import Footer from './layout/footer';
import Main from './layout/main';

function App() {
  console.log('start app');
  return (
    <div className="App d-flex flex-column jus">
      <NavBar />
      <div className="container flex-grow-1">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
