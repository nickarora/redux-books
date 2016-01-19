import React, { Component } from 'react';
import { connect } from 'react-redux';

// container is a react component that has a direct connection to the state
// the state is managed by redux (and its associated reducers)
// aka: Smart Components
class BookList extends Component {

    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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

// connect(mapStateToProps)
// connects a react componnent to a redux store
// returns a function that needs to be called using the component you are mapping to
// as an argument
export default connect(mapStateToProps)(BookList);