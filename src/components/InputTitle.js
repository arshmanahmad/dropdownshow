import React from 'react'
import {useState} from 'react';

const InputTitle = ({valueGetter}) => {
    const[changeInput,setChangeInput]= useState('');
    const handleChange= (event) =>{
        setChangeInput(event.target.value);
        valueGetter(event.target.value);

    }
  return (

    <div>
        <form onChange={handleChange}>
            <h1>Title</h1>
            <input  type="text" value={changeInput}/>
        </form>
    </div>
  )
}

export default InputTitle;