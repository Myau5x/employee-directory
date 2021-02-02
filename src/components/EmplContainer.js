import React, { Component } from "react";
import List from "./List";
import API from "../utils/API";
import TableHead from "./TableHead";
import SearchForm from "./SearchForm";

class EmplContainer extends Component {
  state = {
    result: [{"gender":"male","name":{"title":"Mr","first":"Logan","last":"Matthews"},"location":{"street":{"number":2636,"name":"Hunters Creek Dr"},"city":"Gresham","state":"Oregon","country":"United States","postcode":28761,"coordinates":{"latitude":"89.9416","longitude":"-0.7126"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"logan.matthews@example.com","login":{"uuid":"a8d466b3-65de-4445-b576-1491993bbf9b","username":"heavygoose158","password":"foxtrot","salt":"zuZ6rsu7","md5":"36b0223638ce21aa97c0a2404924e49a","sha1":"69401acb7352eb51745025042ef9e04571cb8fff","sha256":"f2a828aea495deec96549ed5b7b43e8e30a923422761a5cb33833578d82dbd81"},"dob":{"date":"1961-06-23T21:17:33.011Z","age":60},"registered":{"date":"2012-09-14T14:27:42.118Z","age":9},"phone":"(552)-779-6778","cell":"(242)-985-5593","id":{"name":"SSN","value":"966-91-6892"},"picture":{"large":"https://randomuser.me/api/portraits/men/7.jpg","medium":"https://randomuser.me/api/portraits/med/men/7.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/7.jpg"},"nat":"US"}],
    search: " ",
    shown: [{"gender":"male","name":{"title":"Mr","first":"Logan","last":"Matthews"},"location":{"street":{"number":2636,"name":"Hunters Creek Dr"},"city":"Gresham","state":"Oregon","country":"United States","postcode":28761,"coordinates":{"latitude":"89.9416","longitude":"-0.7126"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"logan.matthews@example.com","login":{"uuid":"a8d466b3-65de-4445-b576-1491993bbf9b","username":"heavygoose158","password":"foxtrot","salt":"zuZ6rsu7","md5":"36b0223638ce21aa97c0a2404924e49a","sha1":"69401acb7352eb51745025042ef9e04571cb8fff","sha256":"f2a828aea495deec96549ed5b7b43e8e30a923422761a5cb33833578d82dbd81"},"dob":{"date":"1961-06-23T21:17:33.011Z","age":60},"registered":{"date":"2012-09-14T14:27:42.118Z","age":9},"phone":"(552)-779-6778","cell":"(242)-985-5593","id":{"name":"SSN","value":"966-91-6892"},"picture":{"large":"https://randomuser.me/api/portraits/men/7.jpg","medium":"https://randomuser.me/api/portraits/med/men/7.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/7.jpg"},"nat":"US"}]
  };

  searchEmpl = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.results, shown: res.data.results }))
      .catch(err => console.log(err));
  };

  filterEmpl = () => {
      const filtered = this.state.result.filter( item => {
        let fullName = item.name.first + ' ' + item.name.last;
        return fullName.includes(this.state.search)
      });
      this.setState({shown: filtered})
  }

  componentDidMount(){
    this.searchEmpl("15");
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    this.filterEmpl()
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
   
  };


//<List employees={this.state.result}/>
//<div>{JSON.stringify(this.state.result)}</div>
  render() {
    return (
        
    <main>
      <h1>Our International company</h1>
      <SearchForm
      value={this.state.search}
      handleInputChange={this.handleInputChange}
      handleFormSubmit={this.handleFormSubmit}/>
      <table className="table table-striped table-hover">
        <TableHead/>
        <List employees={this.state.shown}/>
      </table>
    </main>
        

    );
  }
}

export default EmplContainer;
