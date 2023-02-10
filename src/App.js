//components
import Navigation from "./components/Navigation";
import Cards from './components/Cards'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Navigation/>
      <div style={{display:'flex',marginTop:'80px',justifyContent:'center'}}>
         <Cards/>
         <Sidebar />
      </div>
    </>
  );
}

export default App;
