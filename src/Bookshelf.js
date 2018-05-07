import React, { Component } from 'react'
import Book from './Book.js'

class Bookshelf extends Component {
  render() {
    const { books } = this.props
    console.log(books)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <Book book={book} key={book.title} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf