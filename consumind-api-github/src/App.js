import React, { Component } from "react";
import axios from "axios";
import './App.css';
import Header from './componets/Header'
import Form from './componets/Form'

class App extends Component{
  state={
    user:'',
    repos: [],
    error: " ",
    loading: false,
    

  }
  changeUser = user =>{
    this.setState({user})
  }
  searchUser = ( ) => {
    const {user} = this.state
    axios.get(`https://api.github.com/users/${user}/repos`)
   .then((data) => {
     console.log("retornou do github", data);
   })
  }
 



  //-----------------RENDER-------------------------------
  render(){ 
    console.log("executando o render")
    const {user, repos, error, loading} = this.state

    return(

  <div className="App">
     <Header/>
     <Form changeUser = {this.changeUser}
            user= {user}
            error = {error}
            loading = {loading}
            ButtonAction = { this.searchUser}
      
      
      />
    </div>

    );
  }
}

export default App;
