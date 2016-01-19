import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// container is a react component that has a direct connection to the state
// the state is managed by redux (and its associated reducers)
// aka: Smart Components
class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                    onClick={ () => this.props.selectBook(book) }
                    className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// take our application state as an argument
// whatever is returned will show up as props inside of BookList
function mapStateToProps(state) {
    return {
        books : state.books
    }
}

// whenever selectBook is called it should be dispatched to ALL reducers
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// connect(mapStateToProps, mapDispatchToProps)
// connects a react componnent to a redux store
// connects action creator to a component
// returns a function that needs to be called using the component you are mapping to
// as an argument
export default connect(mapStateToProps, mapDispatchToProps)(BookList);