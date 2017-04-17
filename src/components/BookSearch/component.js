import React, { PropTypes } from 'react'
import './assets/style.css'

const BookSearch = ({ searchItemBook }) => {
  return (
    <p className="p-search">
      Search : <input type="text" onChange={event => searchItemBook(event.target.value)} />
    </p>
  )
}

BookSearch.propTypes = {
  searchItemBook: PropTypes.func.isRequired
}

export default BookSearch