import React from 'react';
import * as axios from 'axios';
import s from './Users.module.css';
import userPhoto from '../../images/userPhoto.png';

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((resp) => {
          props.setUsers(resp.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <div className="image">
                <img
                  className={s.userPhoto}
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  alt="img"
                />
              </div>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              {/* <div>{user.location.country}</div> */}
              {/* <div>{user.location.city}</div> */}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
