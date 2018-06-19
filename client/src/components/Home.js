import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Header } from 'semantic-ui-react'

const Home = () => (
  <Segment padded>
    <Header
      textAlign="center"
      as="h2"
    >
      <Link to="/posts">
      Chuck Norris' Thoughts & Feelings
      </Link>
    </Header>
  </Segment>
)

export default Home