import React from 'react';
import * as axios from 'axios';
import s from './Users.module.css';
import userPhoto from '../../images/userPhoto.png';

class Users extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((resp) => {
        this.props.setUsers(resp.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((user) => (
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
                      this.props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
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
  }
}

export default Users;
