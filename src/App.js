import React from 'react';
import { Route } from 'react-router-dom';
// Import components
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      <div className="app_content_wrapper">
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route path="/dialogs" render={() => <Dialogs store={props.store} />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
