import React from "react";
import List from "./components/List";

const groceries = [
  {
    id: 1,
    name: "Milk",
    purchased: true
  },
  {
    id: 2,
    name: "Eggs",
    purchased: true
  },
  {
    id: 3,
    name: "Cheese",
    purchased: false
  },
  {
    id: 4,
    name: "Cake Mix",
    purchased: false
  },
  {
    id: 5,
    name: "Carrots",
    purchased: false
  },
  {
    id: 6,
    name: "Juice",
    purchased: true
  }
];
///https://randomuser.me/api/?results=9





function App(props) {
  return (
    <main>
      <h1>Our International company</h1>
    <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th scope='col'>image</th>
        <th scope="col">Name</th>
        <th scope="col">Gender</th>
        <th scope='col'>Age</th>
        <th scope='col'>email</th>
        <th scope="col">City</th>
        
      </tr>
    </thead>
  <List employees={props.employees} />
  </table>
  </main>
  );
}

export default App;
