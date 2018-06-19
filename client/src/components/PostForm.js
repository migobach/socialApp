import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { updatePost, addPost } from '../reducers/posts'

class PostForm extends React.Component {
  initialState = {
    body: '',
    author: '',
  }

  state = {...this.initialState}

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState( { [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = this.state 
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updatePost : addPost
    dispatch(func(post))
    this.setState({...this.initialState})
    closeForm()
  }

  render() {
    const { body, author } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="body"
          required
          defaultValue={body}
          onChange={this.handleChange}
          label="Body"
        />
        <Form.Input
          name="author"
          defaultValue={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm)