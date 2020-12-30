import React from 'react';
import * as axios from 'axios';
import s from './Users.module.css';
import userPhoto from '../../images/userPhoto.png';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((resp) => {
        this.props.setUsers(resp.data.items);
        this.props.setTotalUsersCount(resp.data.totalCount);
      });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((resp) => {
        this.props.setUsers(resp.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

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
                className={this.props.currentPage === page && s.selectedPage}
                onClick={() => this.onPageChange(page)}
              >
                {page}
              </span>
            );
          })}
        </div>
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
