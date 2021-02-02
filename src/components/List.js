import React from "react";
import EmpRow from "./EmpRow";
/*
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
*/
//{//JSON.stringify(props.employees)}
///{props.employees.map(item => <div>{JSON.stringify(item)}</div>)}
//{props.employees.map(item => <EmpRow {...item} />)}

function List(props) {
  //console.log("I m here");
  //console.log(props);
 // console.log(JSON.stringify(props.employees[0].name.first));
  return (
    <tbody>
      
      {props.employees.map(item => <EmpRow {...item} />)}
    </tbody>
   
    

  );
  
}

export default List;
