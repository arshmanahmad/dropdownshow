// Certainly! Here's a project idea for React.js that can help you improve your logic-building and React skills:

// Project: Task Tracker Application

// Project Description:
// Build a web application that allows users to create, view, update, and delete tasks or to-do items. This project will help you practice fundamental React concepts such as component composition, state management, and event handling.

// Key Features:

// Task List: Display a list of tasks with details like task name, due date, and status.

// Add Task: Users can add new tasks with a name, description, due date, and status.

// Edit Task: Users can edit the details of a task, such as updating the name, description, due date, or status.

// Delete Task: Users can delete tasks they no longer need.

// Task Status: Implement different task statuses (e.g., "To Do," "In Progress," "Completed").

// Task Filtering: Allow users to filter tasks by their status (e.g., show only "To Do" tasks).

// Task Sorting: Implement sorting options for tasks based on criteria like due date or status.

// Validation: Validate user input for adding and editing tasks (e.g., required fields, date format).

// Technologies and Tools:

// React.js for building the frontend user interface.
// State management (useState and/or useReducer) to manage tasks.
// CSS for styling the application.
// Local storage or a backend API (optional) to persist task data.
// How to Start:

// Set up a new React project using Create React App or your preferred development environment.

// Create React components for TaskList, TaskItem, TaskForm, etc.

// Manage tasks using React state.

// Implement user interfaces for adding, editing, and deleting tasks.

// Implement task filtering and sorting.

// Add CSS styles to make the application visually appealing.

// Test the application and ensure it works as expected.

// Optionally, deploy the application to a hosting platform like Netlify or Vercel to share it with others.

// This project provides a great opportunity to practice React concepts, improve your logical thinking, and enhance your frontend development skills. As you become more comfortable with React, you can add more advanced features and complexity to the task tracker application.

import React, { useState } from 'react';
import "./components/App.css";
import EditForm from "./components/EditForm";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';


const App = () => {

  const [inputTask,setInputTask] = useState('');
  const [inputDue,setInputDue] = useState('');
  const [inputStatus,setInputStatus] = useState('');
  // const [visibility,setVisibility] = useState('');
  const [inputArray,setInputArray] = useState([]);

  // This is good indentation

  const handleTextChange = (event) =>{
    setInputTask(event.target.value);
  };
  const handleDueChange = (event) =>{
    setInputDue(event.target.value);
  };
  const handlestatusChange = (event) =>{
    setInputStatus(event.target.value);
  };
  
  // setInputArray([
  //   ...inputArray,
  //   {
  //     taskName:inputTask,
  //    dueDate:inputDue,
  //    status:inputStatus,
  //   }
  // ])
  const takeInput = () =>{
    const newItem = {
      id: new Date().getTime(),
      taskName:inputTask,
      dueDate:inputDue,
      status:inputStatus,
    }
    setInputArray([...inputArray,newItem]);
    return newItem;
  };
  const removeItem = (itemId) =>{
    const updatedArr =inputArray.filter((item)=>item.id!==itemId);
    setInputArray(updatedArr);
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    takeInput();
    setInputTask('');
    setInputDue('');
    setInputStatus('');
  };


  const renderRecord = inputArray.map((record)=>{
    return(
      <tr>
        <td>{record.taskName}</td>
        <td>{record.dueDate}</td>
        <td>{record.status}</td> 
        <td>
        <span class="material-symbols-outlined" onClick={()=> removeItem(record.id) }>cancel</span>
          <span class="material-symbols-outlined">edit</span>
        </td>
      </tr>
    )
  });


  return (
   
   <html lang="en">
   <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <title>Document</title>
   </head>
<body>
  <div className='main-container'> 

          <form onSubmit={handleSubmit}>
              Input Name:
              <input type="text" onChange={handleTextChange} value={inputTask} placeholder='task name' />
              Due date:
              <input type="text" onChange={handleDueChange} value={inputDue} placeholder='due date' />
              Status:
              <input onChange={handlestatusChange} value={inputStatus} type="text" placeholder='status' />
            <button type='submit'>Submit</button>
          </form>

        <table>
            <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead> 

            <tbody>
              {renderRecord} 
            </tbody>
        </table>
      <div className='EditForm'>
        <EditForm/>
      </div>
  </div>
</body>
   </html>

  )
}

export default App