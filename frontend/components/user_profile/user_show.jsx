import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import ArticleIndex from '../articles/article_index';
=======
>>>>>>> user-profile

const UserShow = props => {
  return (
    <main>
      <section>
<<<<<<< HEAD
        <img></img>
        <h3>{props.user.username}</h3>
=======
        <img>user avatar</img>
        <h3>username goes here</h3>
>>>>>>> user-profile
      </section>
      <section>
        <h3>user stats</h3>
        <ul>
          <li># articles written</li>
          <li># articles edited</li>
        </ul>
      </section>
      <section>
        <h3>Articles written</h3>
<<<<<<< HEAD
        <ArticleIndex articles={props.articles} />
=======
        <ul>
          <li>Title of each article...</li>
          <li>Title of each article...</li>
          <li>Title of each article...</li>
        </ul>
>>>>>>> user-profile
      </section>
    </main>
  );
};

<<<<<<< HEAD


const mapStateToProps = (state) => {
  const user = state.entities.users[state.session.id];
  //articles

  return {
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
=======
// ImageIndex:
// render() { return <ul>{images}</ul>}
export default UserShow;
>>>>>>> user-profile
