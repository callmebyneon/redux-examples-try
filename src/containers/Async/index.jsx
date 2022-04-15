import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '~/actions/AsyncActions';
import styled from '@emotion/styled';

import OuterSection from '~/components/Layout/OuterSection';
import Picker from '~/components/Async/Picker';
import Posts from '~/components/Async/Posts';

import theme from '~/theme';

const PostList = styled.div`
  max-width: 640px;
  padding-bottom: ${props => props.isFetching ? '1rem' : '2rem'};
  opacity: ${props => props.isFetching ? 0.5 : 1};

  & li {
    list-style-position: outside;
    list-style-type: circle;
    word-break: keep-all;
    transition: color 0.22s;

    &:hover {
      color: ${theme.text.active};
    }
  }
`;

const Async = ({ selectedSubreddit, posts, isFetching, lastUpdated }) => {
  const dispatch = useDispatch();
  const isEmpty = posts.length === 0;

  const handleChange = nextSubreddit => dispatch(selectSubreddit(nextSubreddit));

  const handleRefreshClick = e => {
    e.preventDefault();
    
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  };

  useEffect(() => {
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
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
          <button className='--small' onClick={handleRefreshClick}>Refresh</button>
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