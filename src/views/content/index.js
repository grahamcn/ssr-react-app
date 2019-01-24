import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, FeatureA } from '../../utility'
import { ClientSettingsContext } from '../../context/clientSettingsContext'

// Test React features - lazy, modal - to test linting, env, etc
const Content = ({ data }) => {
  const [showModal, setShowModal] = useState(false)
  const { featureA } = useContext(ClientSettingsContext)

  const modal = (
    <Modal>
      Modal content...
      <button onClick={() => setShowModal(!showModal)}>Close</button>
    </Modal>
  )

  return (
    <article className="content">
      <h1>Home</h1>
      {JSON.stringify(data)}
      {featureA && <FeatureA />}
      <button onClick={() => setShowModal(!showModal)}>Toggle Modal</button>
      {showModal ? modal : null}
    </article>
  )
}

Content.propTypes = {
  data: PropTypes.string.isRequired,
}

export default Content
