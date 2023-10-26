import React from 'react';
import './TableShow.css';
import {useState} from 'react';

const TableShow = ({values}) => {
    const[value,setValue] = useState(values);
    const handleCloseClick = (rowToRemove) =>{
        const updatedTable = value.filter((row)=>{
            return rowToRemove !== row.id;
        });
        setValue(updatedTable);
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
                    values && values.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.skill}</td>
                                <td>{item.email}</td>
                                <td>{item.education}</td>
                                <td><span class="material-symbols-outlined" onClick={()=> handleCloseClick(item.id)}>close</span><span class="material-symbols-outlined">edit</span>
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