import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
  Container, 
  Header, 
  Card,
  Button,
} from 'semantic-ui-react'
import { getPosts } from '../reducers/posts'
import { deletePost } from '../reducers/posts'

class Posts extends React.Component {
   
  
  
  posts = () => {
    return this.props.posts.map( post => 
      <Card key={post.id}>
        <Card.Content>
          <Card.Description>
            {post.body}
          </Card.Description>
          <Card.Meta>
            {post.author}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/posts/${post.id}`}>
            View
          </Link>
          <Button onClick={() => this.props.dispatch(deletePost(post.id))}>
            Delete
          </Button>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h4" textAlign="center">Posts about Señor Norris</Header>
        <Card.Group itemsPerRow={3}>
          { this.posts() }
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(Posts)