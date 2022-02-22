import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
function App() {
  return (
    <div className="app">

      
      <Header />

      <div className="app_body">
        <SideBar />
        <Feed />

      </div>
    </div>
  );
}

export default App;
