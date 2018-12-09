import React from 'react';
import '../assets/Square.css';

class Square extends React.Component {
    render() {
        return (
            <button className="Square" 
            onClick={() => this.props.onClick()}>
             {this.props.value}
            </button>
        );
    }
}

export default Square;