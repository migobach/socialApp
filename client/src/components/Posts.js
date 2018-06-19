import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
  Container, 
  Header, 
  Card,
  Button,
  Divider,
} from 'semantic-ui-react'
import { getPosts } from '../reducers/posts'
import { deletePost } from '../reducers/posts'
import { addPost } from '../reducers/posts'
import PostForm from './PostForm'



class Posts extends React.Component {
  state = { showForm: false }
   
  showForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

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
          <Button>
            <Link to={`/posts/${post.id}`}>
              View
            </Link>
          </Button>
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
        { this.state.showForm && <PostForm /> }
        <Button onClick={this.showForm}>
          Add
        </Button>
        <Divider />
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