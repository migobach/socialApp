// import React from 'react'
// import { connect } from 'react-redux'
// import {
//   Divider,
//   Header,
//   Container,
//   Table,
//   Button,
// } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
// import PostForm from './PostForm'

// class PostView extends React.Component {
//   state = { showForm: false }

//   toggleForm = () => {
//     this.setState({ showForm: !this.state.showForm })
//   }

//   render () {
//     const { post = {} } = this.props
//     const { showForm } = this.state
//     return (
//       <Container>
//         <Link to="/posts">View all Posts</Link>
//         <Button onClick={this.toggleForm}>
//           { showForm ? 'Cancel' : 'Edit' }
//         </Button>
//       { showForm ? 
//           <PostForm closeForm={this.toggleForm} {...post} />
//           :
//           <div>
//             <Header as="h3" textAlign="center">{post.author}</Header>
//             <Table>
//               <Table.Body>
//                 <Table.Row>
//                   <Table.Cell>{post.body}</Table.Cell>
//                 </Table.Row>
//                 <Table.Row>
//                   <Table.Cell>{post.author}</Table.Cell>
//                 </Table.Row>
//               </Table.Body>
//             </Table>
//           </div>
//       }
//     </Container>
//   )
// }

// const mapStatetoProps = (state, props) => {
//   const { id } = props.match.params
//   const post = state.posts.find( p => p.id === parseInt(id, 10) )
//   return { post }
// }

// export default connect(mapStatetoProps)(PostView)