/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow, mount } = require('enzyme')
const { shows } = require('../public/data')
const {store, rootReducer } = require('../js/Store')
// use shallow when you can, mount only when you have to (it is slow)

// x in front of describe('xdescribe') is only so that these tests don't run...
xdescribe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>Mini-Flix</h1>)).to.be.true
  })

  it('should render all shows per data', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})

describe('Store', () => {
  it('should bootstrap', () => {
      const state = rootReducer(undefined, { type:'@@redux/INIT' })
      expect(state).to.deep.equal({ searchTerm: '' })
  })
  it('should handle setSearchTerm actions', () => {
    const state = rootReducer({ searchTerm: 'some random string' }, { type: 'setSearchTerm', value: 'correct string' })
    expect(state).to.deep.equal({ searchTerm: 'correct string' })
  })
})
