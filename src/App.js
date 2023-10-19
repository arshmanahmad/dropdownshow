import React from 'react';
import HardTable from "./components/HardTable";
// import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import NextPage from './components/NextPage';
import {useState} from 'react';
const App = () => {
  const [item,setItem] = useState([]);
  const [prop,setProp] = useState([]);
  const propGetter = (value) =>{
    setItem(value);
  }
  const handleClick = () =>{
    setProp(item);
    const updatedArray = [
      ...prop,
      ...item.map((pass)=>(
        <tr>
          <td>{pass.name}</td>
          <td>{pass.email}</td>
          <td>{pass.skill}</td>
          <td>{pass.education}</td>
        </tr>
      ))
    ];
    setItem(updatedArray);
    console.log(item)
  }



  return (
    <div>
       <HardTable item = {item} />
       <button onClick={handleClick}>Click to add</button>
       <NextPage propGetter={propGetter}/>
    </div>
  )
}

export default App;
      // <Router>
      //   <div>
      //     <HardTable/>
      //     <Link to="/next-page">
      //     <button>Click to add</button>
      //     </Link>
      //     <Route path="/next-page" component={NextPage}/>;
      //   </div>
      // </Router>