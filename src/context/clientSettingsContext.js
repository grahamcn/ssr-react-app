import React from 'react'
import PropTypes from 'prop-types'

let ClientSettingsContext
const { Consumer, Provider } = (ClientSettingsContext = React.createContext())

class ClientSettingsProvider extends React.Component {
  constructor(props) {
    super(props)

    const { clientSettings } = this.props
    this.state = clientSettings
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

ClientSettingsProvider.propTypes = {
  clientSettings: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export {
  ClientSettingsProvider,
  Consumer as ClientSettingsConsumer,
  ClientSettingsContext,
}
