import React, { Component } from 'react';

class AddForm extends React.Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addTofo(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New todo:</label>
                    <input type="text" onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }

}

export default AddForm;