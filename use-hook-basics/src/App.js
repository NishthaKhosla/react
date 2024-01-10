import './index.css'
import User from './components/user'
import Timer from './components/timer'
import { useState } from 'react'

const App = () => {
const [Toggle,setToggle] = useState(false);
  return (
    <div>
   <User></User>
   
   {Toggle ? <p className={"centered-containers"}>Alternate Component</p> : <Timer></Timer>}
   <button  className={"centered-containers"} onClick={()=> setToggle (!Toggle)}>Toggle</button>
   
   </div>
  
  );
}

export default App;
