import React from 'react';
import './EditForm.css';
import {useState} from 'react';


const EditForm = ({nameValue,dateValue,statusValue}) => {
  const [taskName,setTaskName] = useState('');
  const [taskDate,setTaskDate] = useState('');
  const [taskStatus,setTaskStatus] = useState('');
  const [isFormVisible,setIsFormVisible]= useState(true);
  
  const handleNameChange = (event) =>{
    setTaskName(event.target.value);
  }
  const handleDateChange = (event) =>{
    setTaskDate(event.target.value);
  }
  const handleStatusChange = (event) =>{
    setTaskStatus(event.target.value);
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    nameValue(taskName);
    dateValue(taskDate);
    statusValue(taskStatus);
    setIsFormVisible(false);

  }
 
  return (
    <div>
      {isFormVisible ? (<div className='EditForm2'>
        <form className='main-form'  onSubmit={handleSubmit} >
            Input Name:
            <input type="text" nameGetter={nameValue} value={taskName} placeholder='task name' onChange={handleNameChange} />
            Due date: 
            <input type="text" value={taskDate} dateGetter={dateValue} placeholder='due date' onChange={handleDateChange} />
            Status:
            <input type="text" statusGetter={statusValue} value={taskStatus} placeholder='status' onChange={handleStatusChange} />
            <button type='submit'>Submit</button>
        </form>
      </div>)
      :(<p>Thankyou for submitting the form.</p>)
     }
  </div>

  )
}

export default EditForm;