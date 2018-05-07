import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

class Bookcase extends Component {
  render() {
    const { books } = this.props

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
    console.log(currentlyReading)
    console.log(wantToRead)
    console.log(read)

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf books={currentlyReading} shelfName="Currently Reading" />
            <Bookshelf books={wantToRead} shelfName="Want to Read"/>
            <Bookshelf books={read} shelfName="Read"/>
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default Bookcase