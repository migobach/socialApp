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

}