import React from 'react';
import './style.css'
// import ReactDOM from 'react-dom';

class Background extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            selectedColor:'#000000',
        }
    }


    changeBackgroundColor = (event) => {
        console.log(event.target.value);
        this.setState({selectedColor:event.target.value});
        // document.getElementsByClassName("back-container")[0].style.backgroundColor = event.target.value;    
    }


    // @override
    render = () => {
        return(
            <div style={{backgroundColor:this.state.selectedColor}} className="back-container">
                
                <div className="color-box">
                    <h2>Choose a color</h2>
                    <input id="box" onChange=
                    {this.changeBackgroundColor} type="color"/>
                    <p>{this.state.selectedColor}</p>
                </div>
            </div>
        );
    }
}

export default Background;
