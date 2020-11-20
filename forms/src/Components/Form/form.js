import React from 'react';
import './style.css'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", number: "", gender: "", password: "" };
    }


    onNnameChange = (event) => {

        // dynamic key used in key for setstate
        this.setState(
            { [event.target.id] : event.target.value });
        // if (event.target.id === "name") {
        //     this.setState({ name: event.target.value });
        // }
        // if (event.target.id === "email") {
        //     this.setState({ email: event.target.value });
        // }
        // if (event.target.id === "number") {
        //     this.setState({ number: event.target.value });
        // }
        // if (event.target.id === "gender") {
        //     this.setState({ gender: event.target.value });
        // }
        // if (event.target.id === "password") {
        //     this.setState({ password: event.target.value });
        // }
    }


    onSubmit = (event) => {
        if(this.state.number === "" ||
        this.state.number.length !== 10){
            window.alert("Inavalide Phone Number")
            return
        }
        
        window.alert(`${this.state.name}
            ${this.state.email}
            ${this.state.number}
            ${this.state.gender}
            ${this.state.password}`);
        
        this.clearFormFields();
    }


    clearFormFields = () => {
        this.setState({ name: "", email: "", number: "", gender: "", password: "" });
    }


    render = () => {
        return (
            <div className="form-container">
                <p>---- User Form ----</p>

                <input
                    id="name"
                    value={this.state.name}
                    onChange={this.onNnameChange}
                    type="text"
                    placeholder="Enter your Name" />
                <input
                    id="email"
                    value={this.state.email}
                    onChange={this.onNnameChange}
                    type="email"
                    placeholder="Enter your Email" />
                <input
                    id="number"
                    value={this.state.number}
                    onChange={this.onNnameChange}
                    type="text"
                    placeholder="Enter your Number" />

                <select
                    id="gender"
                    value={this.state.gender}
                    onChange={this.onNnameChange}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>

                <input
                    id="password"
                    value={this.state.password}
                    onChange={this.onNnameChange}
                    type="password"
                    placeholder="Enter your Password" />
                <input
                    onClick={this.onSubmit}
                    className="submit-btn"
                    type="submit" />
            </div>
        );
    }
}

export default Form;
