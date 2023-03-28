import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './CollegeBasketballTeams.json';

const data2 = data.teams;
console.log(data2);

//Header
function WelcomeHeader() {
  return <h1>React March Madness!!!</h1>;
}

class Teams extends React.Component<{
  school: string;
  name: string;
  city: string;
  state: string;
}> {
  render() {
    const oneteam = this.props;

    return (
      <div className="card">
        <div className="card-body" style={{ color: 'black' }}>
          <h2>{oneteam.school}</h2>
          <h3>{oneteam.name}</h3>
          <h3>
            {oneteam.city}, {oneteam.state}
          </h3>
        </div>
      </div>
    );
  }
}

//function that returns a list of teams
function TeamList() {
  return (
    <div>
      {data2.map((oneteam) => (
        <Teams {...oneteam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeHeader />
        <TeamList />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;