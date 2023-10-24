import React, { useEffect } from 'react'
import {useState} from 'react';

const InputField = ({valueGetter}) => {
    const [name,setName] = useState('');
    const [skill,setSkill] = useState('');
    const [email,setEmail] = useState('');
    const [education,setEducation] = useState('');
    const[elements,setElements] = useState([]);
    
    const handleChange = (event,setter) =>{
        setter(event.target.value);
      }
    const data={
      name,
      skill,
      email,
      education,
    }
    const handleSubmit = (event) =>{
      event.preventDefault();
      setElements([...elements,data]);
    }
    
    useEffect(()=>{
      valueGetter(elements);
    },[elements])
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder='name' onChange={(event)=>{handleChange(event,setName)}}/>
        <input type="text" value={skill} placeholder='name' onChange={(event)=>{handleChange(event,setSkill)}}/>
        <input type="text" value={email} placeholder='name' onChange={(event)=>{handleChange(event,setEmail)}}/>
        <input type="text" value={education} placeholder='name' onChange={(event)=>{handleChange(event,setEducation)}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default InputField;