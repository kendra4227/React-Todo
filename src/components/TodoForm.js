import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            newItem:""
        };
    }

    handleChanges = (e) => {
        // update state with each keystroke
        this.setState({
            ...this.state,
            newItem: e.target.value
        });
    };

    // class method to submit form
    submitTask = (e) =>{
        e.preventDefault();
        this.props.addItem(e, this.state.newItem);
        this.setState({newItem:""});
    };
    render() {
        return (
            <form onSubmit={this.submitTask}>
            <input 
            value ={this.state.newItem}
            onChange={this.handleChanges}
            type="text"
            name ="item"
                />
            <button>Add</button>
            <button>Clear Completed</button>
            
            </form>
        )
    }
}

export default TodoForm;
