import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/1">Peter</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Anna</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Julia</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Helen</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Hayley</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/6">Jessica</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi, how are you?</div>
        <div className={s.message}>Good. Thank you!</div>
        <div className={s.message}>Awesome, dude!</div>
      </div>
    </div>
  );
};

export default Dialogs;
