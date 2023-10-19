import React from 'react';
import {useState} from 'react';
import './HardTable.css';

const HardTable = ({item}) => {

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Skill</th>
                    <th>Education</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Arshman</td>
                    <td>arsh2387@gmail.com</td>
                    <td>Web-developer</td>
                    <td>BSCS</td>
                </tr>
                <tr>
                    <td>Hassan</td>
                    <td>hassan8923@gmail.com</td>
                    <td>Junior-developer</td>
                    <td>BSCS</td>
                </tr>
      
            </tbody>
      </table>
    </div>
  )
}

export default HardTable;