import React from 'react';
import CommentSection from './components/CommentSection';
import PropTypes from "prop-types";


const PostContainer = props => {
	return (
		<div>
			{props.data.map(post => (
				<Post key={post.id} post={post} />	
			))}
		</div>
  );
};

PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostContainer;