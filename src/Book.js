import React, { Component } from 'react'

class Book extends Component {
  render() {
    const { book, updateBookshelf } = this.props
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks && book.imageLinks.thumbnail) || ('')})` }}></div>
          <div className="book-shelf-changer">
            <select defaultValue={!book.shelf ? "none" : book.shelf} onChange={(event) => (updateBookshelf(book, event.target.value))}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.length > 1 ? (
            book.authors.join(', ')
          ) : (
            <div key={book.author}>
              <p>{book.author}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Book