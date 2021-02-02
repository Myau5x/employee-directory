import React from "react";

function EmpRow(props) {
    return (
      
        <tr key = {props.email}>
          <td><img src={props.picture.medium} alt = {props.name.first+' '+props.name.last}></img></td>
          <th scope="row">{props.name.first+' '+props.name.last}</th>
          <td>{props.gender}</td>
          <td>{props.dob.age}</td>
          <td>{props.email}</td>
          <td>{props.location.city+','+props.location.country}</td>
        </tr>
      
  
      
    );
  }

export default EmpRow;