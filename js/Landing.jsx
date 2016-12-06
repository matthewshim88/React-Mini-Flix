const React = require('react')
const { Link } = require('react-router')
const { connector } = require('./Store')
const { hashHistory } = require('react-router')

// example of using ES6 class instead of React.createClass
// diff: must add constructor passing in props, MUST BIND-  when using this
// **Note: in React.createClass it implicitly auto-binds
class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
  }
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }
  gotoSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
  }
  render () {
    return (
      <div className='app-container'>
        <div className='home-info'>
          <h1 className='title'>Mini-Flix (React Demo)</h1>
          <img className='reactLogo' src='public/react.png' />
          <form onSubmit={this.gotoSearch}>
            <input value={this.props.searchTerm} onChange={this.handleSearchTermEvent}
              className='search' type='text' placeholder='Search' />
          </form>
          <Link to='/search' className='browse-all'> or Browse All</Link>
        </div>
      </div>
    )
  }
}

const { func, string } = React.PropTypes

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)
