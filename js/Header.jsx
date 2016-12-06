const React = require('react')
const { Link } = require('react-router')
const { func, bool, string } = React.PropTypes
const { connector } = require('./Store')

const Header = React.createClass({
  propTypes: {
    setSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input type='text' value={this.props.searchTerm}
        onChange={this.handleSearchTermEvent} className='search-input' placeholder='Search' />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            Mini-Flix (React Demo)
          </Link>
          <img className='reactLogo' src='/public/react.png' />
        </h1>
        {utilSpace}
      </header>
    )
  }
})

module.exports = connector(Header)
