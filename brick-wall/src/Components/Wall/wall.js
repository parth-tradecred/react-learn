import React from 'react';
import './style.css'
import Brick from '../Brick/Brick.js'

class Wall extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            bricks:[1,2,3,4,5],
        }
    }

    addMoreBricks = () => {
        const newBricks = [...this.state.bricks];

        newBricks.push(newBricks.length + 1);

        this.setState({
            bricks: newBricks
        });
    };

    // @override function
    // render method returns what is bieng displayed on browser
    
    render = () => {
        let i=0;
        return(
            <div className="wall-container">
                {
                    // console.log(this.state.bricks.length)
                    // for (i = 0; i < 5; ++i) {
                    //     console.log(i);
                    // }
                }
                {
                    this.state.bricks.map( (brick) => {
                        return <Brick key={brick} name={brick}/>
                    })
                }

                
                
                <button className="add-button" onClick={this.addMoreBricks}>+</button>

            </div>
        )
    }
}

export default Wall;