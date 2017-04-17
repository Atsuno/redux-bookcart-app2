import { connect } from 'react-redux'
import BookList from './component'

const mapStateToProps = state => ({
  books: state.books,
  searchBook: state.searchBook
})

export default connect(mapStateToProps)(BookList)