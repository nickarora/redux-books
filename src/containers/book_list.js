import React, { Component } from 'react';

// container is a react component that has a direct connection to the state
// the state is managed by redux (and its associated reducers)
// aka: Smart Components
export default class BookList extends Component {

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