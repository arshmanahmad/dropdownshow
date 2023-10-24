import React from 'react';
import './TableShow.css';

const TableShow = ({values}) => {
    const handleCloseClick = (id) =>{
        values.filter((item)=>{
            return item.id !== id;
        })
    }
    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Skill</th>
                    <th>Email</th>
                    <th>Education</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    values && values.map((item,id)=>{
                        id = Math.floor(Math.random()*9999);
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.skill}</td>
                                <td>{item.email}</td>
                                <td>{item.education}</td>
                                <td><span class="material-symbols-outlined" onClick={handleCloseClick}>close</span><span class="material-symbols-outlined">edit</span>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default TableShow