import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';
import AssignmentMark from './components/AssignmentMark/AssignmentMark';
import PhoneBar from './components/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-6xl'>Hello tailwind</h1>
      <Pricing></Pricing>
      <AssignmentMark></AssignmentMark>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
