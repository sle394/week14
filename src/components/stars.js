import React from 'react';
import ReactStars from 'react-stars'
import ReactDOM from 'react-dom/client';

//Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!) 


export default class Stars extends React.Component {
    constructor(props) {
        super(props);
    }

    ratingChanged = (newRating) => {
        this.props.updateRating(newRating)
        console.log(newRating)
    }
        
    render() {
        return (
            <ReactStars
            count={5}
            onChange={this.ratingChanged}
            size={24}
            value={this.props.rating}
            color2={'#ffd700'} />
        );
    }
}