import logo from './logo.svg';
import './App.css';
import Book_flight1 from "../src/components/Book_flight1";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BasePage>
      <Router
      // Hanldes all url requests
      >
        <Switch>
          
    <Route path="/Book_flight1" exact render={(props) => <Book_flight1 />} />
    </Switch>
      </Router>
    </BasePage>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
