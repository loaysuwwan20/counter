//import Navbar from "./Components/Navbar/Navbar";
//import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App(){

  let[count,setCount]=useState(0);

  const changecount=()=>setCount(count+1);
 

return(
  <>
 <button onClick={changecount}> loay suwwan  {count}</button>

  </>


)
}
export default App;