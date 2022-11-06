import React from 'react';
import Stars from './stars';

//Review: A text review a user can leave on a movie. 

export default class Review extends React.Component {
    constructor(reviewProp) {
        super(reviewProp);
        this.state = {
            review: reviewProp.review
        };
    }
    render() {
        return (
            <div className="py-3">
               <h4>{this.props.name}</h4>
               <Stars {...{rating: this.props.rating}} />
               {this.props.content}
            </div>
        );
    }
}