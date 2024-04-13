import { createContext } from 'react';
import './App.css';
import ComponentA from './componentA';

const firstName=createContext();
const lastName=createContext();

function App() {
  return (
   <>
   <firstName.Provider value={"mansi"}>
   <lastName.Provider value={"bansal"}>
   <ComponentA/>
   </lastName.Provider>
   </firstName.Provider>
  
   </>
  );
}

export default App;
export {firstName,lastName};