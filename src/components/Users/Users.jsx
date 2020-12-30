import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../images/userPhoto.png';

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
