import React from 'react';
import Stars from './stars';

//ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.

export default class ReviewForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rating: props.rating
        };

        this.leaveReview = this.leaveReview.bind(this);
        this.updateRating = this.updateRating.bind(this);

    }

    leaveReview(){
        let name = document.getElementById('name').value;
        let content = document.getElementById('content').value;
        let id = 0;

        this.props.updateReview({name: name, content: content, id: id, rating: this.state.rating})
    }

    updateRating(newRating) {
        this.setState({ rating: newRating })
    }

    render() {
        return (
            <div className="form">
                <h3>Leave your own review:</h3>

                <div id="stars">
                    <Stars {...{updateRating:this.updateRating, rating:this.state.rating}}/>
                </div>

                <input id="name" className="form-control py-2 my-2" placeholder="Name"></input>
                <textarea id="content" className="form-control py-2 my-2" placeholder="Review"></textarea>
                <button id="btn-review" type="button" className="btn btn-primary" 
                onClick={this.leaveReview}>Leave Review</button>
            </div>
        );
    }
}