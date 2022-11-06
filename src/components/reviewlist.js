import React from 'react';
import Review from './review';

//ReviewList: a container inside of a Movie that houses Review components. 

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container">
                {this.props.reviewList.map((reviews, index) => <Review key={index} {...reviews} />)}
            </div>
        );
    }
}