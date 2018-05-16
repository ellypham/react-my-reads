import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
  state = {
    results: ''
  }


  updateQuery = (query) => {
    if(query === '') {
      this.setState( { results: ''} )
    } else {
      BooksAPI.search(query).then(results => {
        if(results.error) {
          this.setState( { results: '' } )
        } else {
          this.setState( { results: results} )
        }
      })

    }
  }

  render() {
    const { results } = this.state
    const { updateBookshelf, books } = this.props
    console.log('searched books ',results)
    console.log('bookshelf', books)
    const allBooks = results && results.length && results.map(result => {
      const assignedBooks = books.find(book => book.id === result.id)
      console.log('assigned books', assignedBooks)
      return Object.assign({}, assignedBooks, result)
    })

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search">
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {allBooks && allBooks.length && allBooks.map((book) => (
              <Book
                book={book}
                key={book.id}
                updateBookshelf={updateBookshelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search