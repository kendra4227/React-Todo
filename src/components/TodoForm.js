import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            newTask:""
        };
    }

    handleChanges = (e) => {
        // update state with each keystroke
        this.setState({
            ...this.state,
            newTask: e.target.value
        });
    };

    // class method to submit form
    submitTask = (e) =>{
        e.preventDefault();
        this.props.addTask(e, this.state.newTask);
        this.setState({newTask:""});
    };
    render() {
        return (
            <form>
            <input 
            type="text"
                />
            <button>Add</button>
            <button>Clear Completed</button>
            
            </form>
        )
    }
}

export default TodoForm;
