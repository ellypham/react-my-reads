import React from 'react'
import  * as BooksAPI from './BooksAPI'
import Bookcase from './Bookcase'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: true
  }

  //get all books on book shelf to load
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  //method to move book to other shelves
  updateBookshelf = (book, shelf) => {
    console.log('book',book)
    console.log('shelf',shelf)
    console.log('book dot shelf', book.shelf)
    book.shelf = shelf
    console.log('updated shelf', shelf)
    BooksAPI.update(book, shelf).then((book, shelf) => {
      this.setState(state => ({
        books: state.books
        .filter(b => b.id !== book.id)
        .concat([book])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <Bookcase books={this.state.books} updateBookshelf={this.updateBookshelf} />
        )}
      </div>
    )
  }
}

export default BooksApp
