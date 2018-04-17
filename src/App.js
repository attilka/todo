import React, { Component } from 'react';
import ToDo from './components/ToDo';
import Form from './components/Form';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      todos : [
        {title:"Laundry", done:true, id:0},
        {title:"Shopping", done:false, id:1},
        {title:"Homework", done:false, id:2}
      ],
      counter: 3
    };
  }

  addToDo = (title) =>{
    if(title !== '')
      this.setState(prevState => ({
        todos: [{title, done: false, id:prevState.counter},...prevState.todos],
        counter: prevState.counter + 1 
      }));

  }

  modifyToDo = (id, value) => {
    this.setState(prevState => {
      const todos = [...prevState.todos];
      const index = todos.findIndex(elem => elem.id === id);
      todos[index] = value;
      return ({todos});
    });
  }

  removeToDo = id => {
    this.setState(prevState => ({todos : prevState.todos.filter(todo => todo.id !== id)}));
  }

  render() {
    const todos = [...this.state.todos].sort(
      (a,b) => a.done === b.done ? b.key - a.key : (a.done ? 1 : -1)
    ).map(todo => 
      <ToDo
        id={todo.id}
        key={todo.id} 
        title={todo.title} 
        done={todo.done}
        remove={this.removeToDo} 
        modify={this.modifyToDo}
      />
    );

    return (
      <div className="App">
        <header className="App-header">
          <Form submit={this.addToDo} placeholder="Add..." icon="plus"/>
        </header>
        {todos}
      </div>
    );
  }
}

export default App;
