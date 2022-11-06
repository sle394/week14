import React from 'react';
import ReviewForm from './reviewform';
import ReviewList from './reviewlist';

//Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…) 


export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewList : []
        };

        this.movieList = this.movieList.bind(this);

    }

    movieList(review) {
        const listCopy = [...this.state.reviewList]
        listCopy.push(review);
            
        this.setState({ reviewList: listCopy })
    }

    render() {

        return (
            <div className="container">
                <div className="card px-3 py-3 my-3">
                    <h2>{this.props.movieName}</h2>
                    <p>
                        {this.props.movieDetail}
                    </p>
                    <ReviewForm {...{updateReview:this.movieList}}/>
                    <ReviewList {...{reviewList: this.state.reviewList}} />
                </div>
            </div>
        );
    }
}