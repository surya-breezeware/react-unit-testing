import logo from './logo.svg'
import './App.css'
import { render, screen } from '@testing-library/react'
import { Skills } from './components/skills/Skills'
import Applications from './components/applications/Applications'
import { MuiMode } from './components/mui/MuiMode'
import Users from './components/users/Users'
// import App from './App'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Applications />
      <Skills /> */}
      {/* <MuiMode /> */}
      <Users />
    </div>
  )
}

export default App
