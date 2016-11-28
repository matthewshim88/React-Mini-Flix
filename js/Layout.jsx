const React = require('react')

const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

// first 'PropTypes' must be capital, like class declaration
// second 'Layout.propTypes' must be lower case, like class instance
const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
