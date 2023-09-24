import React from 'react';
import InputTitle from './components/InputTitle';
import BoxShow from './components/BoxShow';
import {useState} from 'react';

const App = () => {
    const[input,setInput] = useState([]);
    // const generateId = () =>{
    //   return  Math.floor(Math.round()*10000)+1;
    // }
    const[finalInput,setFinalinput]= useState([]);
    // const setBookById = (id,newTitle) =>{
    //   const id = generateId();
    //   const updatedBook = finalInput.map((book)=>{
    //     if(book.id===id){
    //       return{...book,title:newTitle};
    //     }
    //     return book;
    //   });
      // console.log(updatedBook);
    //   setFinalinput(updatedBook);
    // };
    const inputGetter =(value)=>{
      console.log(value)
      setInput(value);
    };
    const handleClick = (event) =>{
      event.preventDefault();
      setFinalinput(input);
    }

  return (
    <div>
      <form>
        <InputTitle valueGetter={inputGetter} />
        <button type='submit' onClick={handleClick}>Submit</button>
        <BoxShow inputValueGetter={finalInput} />
      </form>
    </div> 
  )
}
export default App;