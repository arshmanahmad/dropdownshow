import React from 'react';
import './EditForm.css';

const EditForm = () => {
  return (
    <div className='EditForm2'>
      <form className='main-form'>
        Input Name:
        <input type="text" placeholder='task name' />
        Due date:
        <input type="text" placeholder='due date' />
        Status:
        <input type="text" placeholder='status' />
        <button type='submit'>Submit</button>
     </form>
    </div>
  )
}

export default EditForm;