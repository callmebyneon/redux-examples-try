import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { selectSubreddit, fetchPostsIfNeed, invalidateSubreddit } from '~/actions/AsyncActions';
import styled from '@emotion/styled';

import OuterSection from '~/components/Layout/OuterSection';
import Picker from '~/components/Async/Picker';
import Posts from '~/components/Async/Posts';

const PostList = styled.div`
  opacity: ${props => props.isFetching ? 0.5 : 1}
`;

const Async = ({ selectedSubreddit, posts, isFetching, lastUpdated }) => {
  const dispatch = useDispatch();
  const isEmpty = posts.length === 0;

  const handleChange = nextSubreddit => dispatch(selectSubreddit(nextSubreddit));

  const handleRefreshClick = e => {
    e.preventDefault();
    
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeed(selectedSubreddit));
  };

  useEffect(() => {
    dispatch(fetchPostsIfNeed(selectedSubreddit))
  }, [selectedSubreddit]);
  
  return (
    <OuterSection>
      <Picker
        value={selectedSubreddit}
        onChange={handleChange}
        options={[ 'reactjs', 'frontend' ]}
      />
      <p>
        {lastUpdated &&
          <span>
            Last updated at {new Date(lastUpdated).toLocaleTimeString()}
            {'. '}
          </span>
        }
        {!isFetching &&
          <button onClick={handleRefreshClick}>Refresh</button>
        }
      </p>
      {isEmpty
        ? (isFetching ? <h3>Loading ...</h3> : <h3>It's Empty.</h3>)
        : <PostList><Posts posts={posts} /></PostList>
      }
    </OuterSection>
  )
};

Async.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  };

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
};

export default connect(mapStateToProps)(Async);