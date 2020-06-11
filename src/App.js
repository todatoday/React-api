import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super();
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount(){
    //here the link of the api
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(json => {
      this.setState({
        isLoaded: true, 
        items: json,
      })
    });

  }


render(){
 

  if(!this.state.isLoaded){
    return <div>is loading.....</div>;
  }
  else{
    return(
      <div>
       <ul>
         {this.state.items.map(item => (
           <li key={item.id}>
            name: {item.name} <br/>
            username: {item.username}<br/>
            email: {item.email}<br/> 
            address: street: {item.address.street} <br/>
        
            suite: {item.address.suite}<br/>
            city: {item.address.city}<br/>
            zipcode: {item.address.zipcode} <br/>

            phone: {item.phone} <br/>
            website: {item.website} <br/>
           </li>

         ))};
       </ul>
      </div>
    );
  }

 
}
}

export default App;
