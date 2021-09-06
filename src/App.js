
// import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import AddTask from './Components/AddTask';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import TaskList from './Components/TaskList';

// import About from './Components/About';
// import Contact from './Components/Contact';
// import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddTask />
      <TaskList />

      <Footer />
    </div>
  );
}

export default App;
