import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class Bookcase extends Component {
  render() {
    const { books, updateBookshelf } = this.props

    //filter books by shelf category
    let currentlyReading = books.filter((book) => {
      return book.shelf === "currentlyReading"
    })

    let wantToRead = books.filter((book) => {
      return book.shelf === "wantToRead"
    })

    let read = books.filter((book) => {
      return book.shelf === "read"
    })

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf books={currentlyReading} shelfName="Currently Reading" updateBookshelf={updateBookshelf}/>
            <Bookshelf books={wantToRead} shelfName="Want to Read" updateBookshelf={updateBookshelf}/>
            <Bookshelf books={read} shelfName="Read" updateBookshelf={updateBookshelf}/>
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
            className="search-link"
          >Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default Bookcase