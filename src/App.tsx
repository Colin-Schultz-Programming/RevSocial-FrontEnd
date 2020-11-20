import React from 'react';
import './app.scss';
import { Landing } from '../src/components/landing/Landing';
import { CreatePost } from './components/userHome/createPost/CreatePost';

import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom'
import { Home } from './components/userHome/Home';
import {NavBar} from '../src/components/navBar/navBar';
import { UserProfile } from './components/userProfile/UserProfile';
import { Provider } from 'react-redux';
import { store } from './store';
import { ViewPostComponent } from './components/userHome/viewPost/viewPostComponent';
import {Feed} from "./components/userHome/Feed"
import { Search } from './components/userHome/Search';

const App: React.FC<any> = () => {
  return (
    <body>
      <Provider store = {store}>
        < NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/user"
              render={() => localStorage.getItem('userToken') ? <Home /> : <Landing />}
            />
            <Route path = "/userHome" component = {(sessionStorage.getItem("user") !== "null" && sessionStorage.getItem("user") !== "undefined") ? Home : Landing}
            />
            <Route path= "/search" component = {Search}/>
            <Route path = "/feed" component = {Feed}/>
            <Route path= "/posts" component={CreatePost}/>
            <Route path= "/account" component = {UserProfile}/>
            <Route path= "/view" component={ViewPostComponent}/>
          </Switch>
        </Router>
      </Provider>
    </body>
  )
}

export default App;
