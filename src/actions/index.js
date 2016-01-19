export function selectBook(book) {
    // selectBook is an actioncreator
    // therefore it must return an action
    // an action is an object with a 'type' property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}