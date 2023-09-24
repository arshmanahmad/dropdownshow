import React from 'react'
import './BoxShow.css';
import {useState} from 'react';
import InputEdit from './InputEdit';

const BoxShow = ({inputValueGetter,onEdit}) => {
  const[inputEdit,setInputEdit] = useState(false);
  const handleEditClick = () =>{
    setInputEdit(!inputEdit);

  }
  const handleSubmit = () =>{
    setInputEdit(false);
  }
  let content = <h3>{inputValueGetter}</h3>;
  if(inputEdit){
    content = <InputEdit onSubmit={handleSubmit} inputValueGetter={inputValueGetter} />;
  }
  return (
    <html lang="en">
    <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
        <div className="container">

          <div className='icon' onClick={handleEditClick}>
            <span class="material-symbols-outlined">
                edit
            </span>
          </div>

            <h1>Title</h1>
            <h1>{content}</h1>
            
        </div>
    </body>
    </html>
  )
}

export default BoxShow;