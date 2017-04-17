import { connect } from 'react-redux'
import { searchItemBook } from '../../actions/searchBook'
import BookSearch from './component'

const mapDispatchToProps = { searchItemBook }

export default connect(null, mapDispatchToProps)(BookSearch)