// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './components/home';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const homeDataHandler = (homeData) => {
    setShowRegister(homeData.register);
    setShowLogin(homeData.login);
    console.log(homeData);
    // console.log(showRegister+" "+showLogin);
  }

  const registrationDataHandler = (registrationData) => {
    console.log(registrationData);
  }
  const loginDataHandler = (registrationData) => {
    console.log(registrationData);
  }

  if(!showRegister && !showLogin){
    return (
      <div className="App">
          <Home onData ={homeDataHandler}/>
      </div>
    );
  }
  else if(showRegister && !showLogin){
    return (
      <div className="App">
          <h2><u>Registration</u></h2>
          <Registration onData={registrationDataHandler}/>
      </div>
    );
  }
  else if(!showRegister && showLogin){
    return (
      <div className="App">
          <h2>Login</h2>
          <Login onData={loginDataHandler}/>
      </div>
    );
  }
}

export default App;
