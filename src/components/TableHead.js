import React from "react";

function TableHead(props) {
  return (
    <thead>
    <tr>
      <th scope='col'>image</th>
      <th scope="col">Name <button className="btn btn-light" onClick={props.handleSort}><i className="fas fa-sort"></i></button></th>
      <th scope="col">Gender</th>
      <th scope='col'>Age</th>
      <th scope='col'>email</th>
      <th scope="col">City</th>
      
    </tr>
  </thead>
    

    
  );
}

export default TableHead;