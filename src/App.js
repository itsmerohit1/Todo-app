import React, { Component } from "react";
import Todos from "./todos";
import AddTodo from "./AddTodo";

class App extends Component {

  state = {
    todos: [
     
    ]
  };
  

  addTodo = (x) => {
    x.id = Math.random();
    let temp = [...this.state.todos, x];
    this.setState({
      todos: temp
    });
  };

  deleteTodo = (x) => {
    let temp = this.state.todos.filter((x1) => {
      return x1.id == x ? false : true;
    });

    this.setState({
      todos: temp,
    });

    console.log(x);
  };

  render() {
    return (
     
      <div className="container light-green">
        <h1 className="center red-text">Todo's</h1>
        <h5 className="center blue-text">(Click on the task to delete) </h5>
        <h5 className="centre green-text"> <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} /></h5>
        <AddTodo addTodo={this.addTodo}  />
      </div>
       
    );
  }
}

export default App;
