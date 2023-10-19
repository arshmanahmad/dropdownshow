import React from 'react';
import {useState} from 'react';

const NextPage = ({propGetter}) => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[skill,setSkill]=useState('');
    const[education,setEducation]=useState('');

    const handleName = (event) =>{
        setName(event.target.value);
    }
    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handleSkill = (event) =>{
        setSkill(event.target.value);
    }
    const handleEducation = (event) =>{
        setEducation(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = [ 
            name,
            email,
            skill,
            education,]
           
        
        propGetter(data);
    };

 
    
 
  return (
    <div className='main-container'>
        <form onSubmit={handleSubmit}>
            <input placeholder='name' value={name} type="text" onChange={handleName}/>
            <input placeholder='email' value={email} type="text" onChange={handleEmail} />
            <input placeholder='skill' value={skill} type="text" onChange={handleSkill} />
            <input placeholder='education' value={education} type="text" onChange={handleEducation} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NextPage;