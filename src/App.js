import React from 'react';
import ReactDOM from "react-dom";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

const todos =[
  {
    name:"Create a Todo list",
    id:1,
    completed:false
  },
  {
    name:"Submit to github",
    id:2,
    completed:false
  },
  {
    name: "Merge Pull Request",
    id:3,
    completed:false
  },
  {
    name:"Talk to Mentor/Mentee",
    id:4,
    completed:false
  },
  {
    name:"Watch tomorrow's module lesson",
    id:5,
    completed:false
  },
  {
    name:"Workout",
    id:6,
    completed:false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state ={
      todos
    };
  }
  addItem = (e,item)=>{
    console.log("adding item");
    e.preventDefault();
    const newItem ={
      name:item,
      completed:false,
      id:Date.now()
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newItem]
    });
  };
  // Class methods to update state
  toggleItem = (itemId) =>{
    console.log("toggling item", itemId);
    this.setState({
      ...this.state,
      todos: this.state.todos.map((item)=>{
        if (itemId === item.id){
          return {
            ...item,
            completed: !item.completed
          };
        }else{
          return item;
        }
      })
    });
  };

    clearCompleted = (e) => {
      e.preventDefault();
      this.setState({
        ...this.state,
        todos: this.state.todos.filter((item) => !item.completed)
      });
    };
  
  render() {
    return (
      <div className="App">
        <div className = "header">
        <h1>Welcome to your Todo App!</h1>
        <TodoForm addItem = {this.addItem}/>
        <TodoList 
        todos={this.state.todos}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
        />
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
