import React from 'react';
import { useState } from 'react';

const InputEdit = ({inputValueGetter}) => {
    const[title,setTitle]= useState(inputValueGetter);

    const handleChange = (event) =>{
        setTitle(event.target.value);
    };
    const handleClick = (event) =>{
        event.preventDefault();
        console.log("This the Edited value:" + title)
        // onEdit(inputValueGetter.id,title);
        // onSubmit();
    };
    
  return (
        <form>
            <label>Title</label>
            <input type="text" value={title} onChange={handleChange}/>
            <button type= 'submit' onClick={handleClick}>
                Save
            </button>
        </form>
  )
}

export default InputEdit;