import React from "react";

function List(props) {
  return (
    <tbody>
      {props.employees.map(item => 
      <tr>
        <td><img src={item.picture.medium}></img></td>
        <th scope="row">{item.name.first+' '+item.name.last}</th>
        <td>{item.gender}</td>
        <td>{item.dob.age}</td>
        <td>{item.email}</td>
        <td>{item.location.city+','+item.location.country}</td>
      </tr>)}
   </tbody>
    

    
  );
}

export default List;
