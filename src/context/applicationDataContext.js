import React from 'react'
import PropTypes from 'prop-types'

let ApplicationDataContext
const { Consumer, Provider } = (ApplicationDataContext = React.createContext())

class ApplicationDataProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ssrPageData: this.props.ssrPageData,
      removeSSRPageData: this.removeSSRPageData,
    }
  }

  removeSSRPageData = () => {
    this.setState({
      ssrPageData: null,
    })
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

ApplicationDataProvider.propTypes = {
  ssrPageData: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export {
  ApplicationDataProvider,
  Consumer as ApplicationDataConsumer,
  ApplicationDataContext,
}
