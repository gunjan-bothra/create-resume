import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Client from './Contentful';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
// import About from './pages/About';
import Work from './pages/Work';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  const [profileInfo, setProfileInfo] = useState({});
  useEffect(() => {
      Client.getEntries({
        'content_type': 'profileWebsite'
      })
      .then(function (entries) {
        console.log(entries.items);
        setProfileInfo(entries.items[0].fields);
      });
  },[]);

  return (
    <div className="App">
      <Profile profileInfo={profileInfo}></Profile>
      {/* <Router>
      <nav 
      style={{float:'right'}}
      >
  <Link style={{padding: '14px 16px', fontSize: '1rem'}} to='/'>About</Link> 
  <Link style={{padding: '14px 16px', fontSize: '1rem'}} to='/work'>Projects</Link> 
</nav> */}
        {/* <Route exact path='/work' component={Work}></Route>
        <Portfolio profileInfo={profileInfo}></Portfolio> */}
        {/* <Route exact path='/' component={() => <Portfolio profileInfo={profileInfo}/>}></Route>
        <Route exact path='/work' component={() => <Work profileInfo={profileInfo}/>}></Route>
        
      </Router> */}
    </div>
  );
}

export default App;
