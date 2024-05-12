import './App.css';
import MenuBtn from './components/MenuBtn';
import AddBoxBtn from './components/AddBoxBtn';
import AddOrderBtn from './components/AddOrderBtn';

function App() 
{
  return (
    <div className='App'>
      <header>
        <div  className='logo'>
          <MenuBtn />
          <h2 className='nameAppTitle'>Stoa</h2>
        </div>
        <div>
          <AddBoxBtn />
        </div>
      </header>
      
      <div className='boxes-container'>
        
      </div>
      
      <div className='add-bill-btn-container'>
        <AddOrderBtn />
      </div>
    </div>
  );
}

export default App;
