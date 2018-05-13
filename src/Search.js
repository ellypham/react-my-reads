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
    const { updateBookshelf } = this.props
    console.log('searched books ',results)
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
            {results && results.length && results.map((book) => (
              <Book
                book={book}
                key={book.title}
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