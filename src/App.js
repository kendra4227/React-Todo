import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

const todos =[
  {
    text:"Create a Todo list",
    id:1,
    completed:false
  },
  {
    text:"Submit to github",
    id:2,
    completed:false
  },
  {
    text: "Merge Pull Request",
    id:3,
    completed:false
  },
  {
    text:"Talk to Mentor/Mentee",
    id:4,
    completed:false
  },
  {
    text:"Watch tomorrow's module lesson",
    id:5,
    completed:false
  },
  {
    text:"Workout",
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
        <h2>Welcome to your Todo App!</h2>
        <TodoForm/>
        <TodoList 
        todos={this.state.todos}
        toggleItem={this.toggleItem}
        />
        </div>
      </div>
    );
  }
}

export default App;
