import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://www.elecspo.com/static/uploads/13/2020/11/Melina-Banned-Twitch.jpg',
        followed: false,
        fullName: 'Peter',
        status: 'Musician',
        location: { city: 'London', country: 'United Kingdom' },
      },
      {
        id: 2,
        photoUrl:
          'https://www.elecspo.com/static/uploads/13/2020/11/Melina-Banned-Twitch.jpg',
        followed: true,
        fullName: 'Hayley',
        status: 'Manager',
        location: { city: 'Maidenhead', country: 'United Kingdom' },
      },
      {
        id: 3,
        photoUrl:
          'https://www.elecspo.com/static/uploads/13/2020/11/Melina-Banned-Twitch.jpg',
        followed: false,
        fullName: 'Anna',
        status: 'Singer',
        location: { city: 'Reading', country: 'United Kingdom' },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <div className="image">
                <img className={s.userPhoto} src={user.photoUrl} alt="Melina" />
              </div>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
