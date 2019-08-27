import React from 'react'
import PropTypes from 'prop-types'

const HomeComponent = ({ data }) => {
  return (
    <article className="home">
      <h1>Home</h1>
      {JSON.stringify(data)}
    </article>
  )
}

HomeComponent.propTypes = {
  data: PropTypes.string.isRequired,
}

export default HomeComponent
