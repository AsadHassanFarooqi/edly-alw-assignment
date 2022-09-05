import React from 'react';
import { useParams } from 'react-router-dom';
import './postdetail.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faList } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';

function PostDetail() {
  const { id } = useParams();
  const {
    data: post,
    isPending: postPending,
    error: postError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const {
    data: comments,
    isPending: commentsPending,
    error: commentsError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return (
    <div className="post__wrapper">
      {(postError || commentsError) && (
        <p className="error__red">{postError || commentsError}</p>
      )}
      <div className="post__detail">
        {!postPending ? (
          <>
            <h1 className="post__title">
              <FontAwesomeIcon icon={faBlog} />
              {post.title}
            </h1>
            <p className="post__body">
              <FontAwesomeIcon icon={faList} />
              {post.body}
            </p>
          </>
        ) : (
          <h1 className="loading">Loading post data....</h1>
        )}
      </div>
      <div className="post__comments">
        <h2 className="post__comments_title">
          Comments(
          {comments.length}
          )
        </h2>
        {!commentsPending ? (
          <ul>
            {comments?.map((comment) => (
              <li key={comment.id} className="comments__wrapper">
                <h6>{comment.name}</h6>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h1 className="loading">Loading comments...</h1>
        )}
      </div>
    </div>
  );
}

export default PostDetail;
