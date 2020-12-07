
import './App.css';
import React from 'react'

import UserCard from './components/UserCard'

class App extends React.Component {


render() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Github User Card</h1>
       <UserCard />

      </header>
    </div>
  );
}}

export default App;
