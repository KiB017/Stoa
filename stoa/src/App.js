import './App.css';
import MenuBtn from './components/MenuBtn';
import Box from './components/Box';
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
        <Box 
          productImage = 'no-image.jpg'
          productPrice = '5'
          productName = 'product'
        />
        <Box 
          productImage = 'no-image.jpg'
          productPrice = '10'
          productName = 'product1'
        />
        <Box 
          productImage = 'no-image.jpg'
          productPrice = '69'
          productName = 'product2'
        />
      </div>
      
      <div className='add-bill-btn-container'>
        <AddOrderBtn />
      </div>
    </div>
  );
}

export default App;
