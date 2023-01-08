import logo from './logo.svg';
import './App.css';
import RightDashboard from './RightDashboard/RightDashboard';
import MainDashboard from './MainDashboard/MainDashboard';
import LeftDashboard from './LeftDashboard.js/LeftDashboard';

function App() {
  return (
    <div className="flex justify-center gap-8">
      <LeftDashboard/>
      <MainDashboard/>
      <RightDashboard/>
    </div>
  )
}

export default App;
