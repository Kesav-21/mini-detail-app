import React, { Component } from "react";
import Card from "./Card";
import { Pagination } from "@mui/material";
class Main extends Component{
    constructor(props){
    super(props);
    this.state={
      data:[],
      activePage:1
    }
}
async componentDidMount() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const json = await response.json();
  this.setState({ data: json });
}
handlePageChange(pageNumber) {
  this.setState({activePage: pageNumber});
}

  render() {
    return (
      <div>
        {this.state.data.map(ele =>(
          <Card id={ele.id} name={ele.name} mail={ele.email} company={ele.company.name} phone={ele.phone} city={ele.address.city} street={ele.address.street} desc={ele.company.catchPhrase} zip={ele.address.zipcode} suite={ele.address.suite} web={ele.website}/>
        )
        )}
        <div className="pageno">
        <Pagination count={10} />
        </div>
      </div>
    );
  }
}

export default Main;