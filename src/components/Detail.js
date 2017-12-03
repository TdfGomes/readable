import React from 'react'
import Comment from './Comment';
import { Panel, Button, Label, Glyphicon } from 'react-bootstrap';


export default function Detail({ post, openModal, editPostOpen, deletePost, updateVote}) {
    
    return (
        <ul className='postlist'>
                <Panel className='post' key={post.id} header={post.title}>
                    <h4>Author: {post.author}</h4>
                    <p>{post.body}</p>
                    <h4><Label className='vote'>{post.voteScore} votes</Label><Glyphicon glyph='glyphicon glyphicon-plus' onClick={() => {updateVote(post.id, 'upVote')}} /><Glyphicon glyph='glyphicon glyphicon-minus' onClick={() => {updateVote(post.id, 'downVote')}}/></h4>
                    <Button bsStyle='primary' bsSize='small' className='postbtn' onClick={() => {editPostOpen(post.id)}}>Edit</Button><Button bsStyle='danger' bsSize='small' className='postbtn' onClick={() => {deletePost(post.id)}}>Delete</Button>
                    <div></div>
                    <Button bsSize='small' onClick={() => {openModal(post.id)}}>{post.commentCount} comments</Button>
                </Panel>

        </ul>
    )
}