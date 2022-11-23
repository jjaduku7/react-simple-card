import React, { Component } from 'react';

class Description extends Component {
    constructor(props) {
        super(props)
    };
    render() {
        return (
            <>
                <div className='descriptionArea'>
                    <h4>{this.props.overview}</h4>
                </div>
            </>
        );
    }
}

export default Description;

