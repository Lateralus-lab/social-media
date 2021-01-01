import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../images/userPhoto.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {
  let pagesCount = 10;
  // let pagesCount = Math.ceil(
  //   this.props.totalUsersCount / this.props.pageSize
  // );

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && s.selectedPage}
              onClick={() => props.onPageChange(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <div className="image">
                <NavLink to={'/profile/' + user.id}>
                  <img
                    className={s.userPhoto}
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                    alt="img"
                  />
                </NavLink>
              </div>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.toggleFollowingProgress(true, user.id);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'f1433dba-8895-490f-9643-de61b9884c24',
                          },
                        }
                      )
                      .then((resp) => {
                        if (resp.data.resultCode === 0) {
                          props.unfollow(user.id);
                        }
                        props.toggleFollowingProgress(false, user.id);
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.toggleFollowingProgress(true, user.id);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'f1433dba-8895-490f-9643-de61b9884c24',
                          },
                        }
                      )
                      .then((resp) => {
                        if (resp.data.resultCode === 0) {
                          props.follow(user.id);
                        }
                        props.toggleFollowingProgress(false, user.id);
                      });
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
