import React from 'react'
import { Route } from 'react-router-dom'
import  * as BooksAPI from './BooksAPI'
import Bookcase from './Bookcase'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
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
    //mutates the books current shelf property to reflect the shelf that the book is being moved to
    book.shelf = shelf
    console.log('updated shelf', shelf)
    BooksAPI.update(book, shelf).then((book, shelf) => {
      this.setState(state => ({
        books: state.books
        //filter the old version of the book out of books
        //return if current book.id does not equal chosen book.id
        .filter(b => b.id !== book.id)
        //concat new version of the book
        .concat([book])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <Bookcase
            books={this.state.books}
            updateBookshelf={this.updateBookshelf}
          />
        )}/>
        <Route path="/search" component={Search} />
      </div>
    )
  }
}

export default BooksApp
