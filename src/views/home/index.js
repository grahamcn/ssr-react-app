import React from 'react'
import PropTypes from 'prop-types'

const Home = ({ data }) => {
  return (
    <article className="home">
      <h1>Home</h1>
      {JSON.stringify(data)}
    </article>
  )
}

Home.propTypes = {
  data: PropTypes.string.isRequired,
}

export default Home
