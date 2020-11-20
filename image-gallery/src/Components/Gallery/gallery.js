import React from 'react'
import "./style.css"
import ImageCard from '../ImageCard/imageCard'

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = { images: [], currentAddress: '' };
    }

    onAddressChange = (event) => {
        this.setState(
            { currentAddress: event.target.value });
    }

    onAddImage = () => {
        this.state.images.push(this.state.currentAddress)
        this.setState(
            {
                images: this.state.images,
                currentAddress: ''
            }
        );
    }

    render = () => {
        return (
            <div className="root-container">
                <p className="title">------ Gallery ------</p>
                <div className="input-box">
                    <input
                        onChange={this.onAddressChange}
                        value={this.state.currentAddress}
                        type="text" />
                    <button
                        onClick={this.onAddImage}
                    >Add</button>
                </div>
                <div className="gallery-area">
                    {this.state.images.map((imageUrl) => {
                        return <ImageCard key={imageUrl} imageUrl={imageUrl} />;
                    })}
                </div>
            </div>
        );
    }
}

export default Gallery;
