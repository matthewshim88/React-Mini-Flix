const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data') // collects data.json

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearcTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>Mini-Flix</h1>
          <input value={this.state.searchTerm} onChange={this.handleSearcTermEvent} className='search-input' type='text' placeholder='Search' />
        </header>
        <div className='shows'>
        {data.shows
          .filter((show) => `${show.title} ${show.description}`.toUpperCase()
          .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
           .map((show) => (
             <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
