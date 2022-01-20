import logo from './logo.svg';
import './App.css';
//import User from './User';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
function App() {
  return (
    <div className="App">
      
      {/*<User data={{name:'Ruks Sutar',age:'30'}} />*/ } 
      <HeaderContainer/>
      <HomeContainer />
    </div>
  );
}

export default App;
