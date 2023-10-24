import React from 'react'
import InputField from './components/InputField';
import TableShow from './components/TableShow';
import {useState} from 'react';
const App = () => {
  const[values,setValue] =useState('');
  const valueGetter = (value) =>{
    setValue(value);
  }
  console.log(values);
  return (
    <div>
      <InputField valueGetter = {valueGetter} />
      <TableShow values = {values} />

    </div>
  )
}

export default App
   