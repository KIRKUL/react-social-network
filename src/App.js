import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/* <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} /> */}


          <Route path='/dialogs' render={() => <Dialogs 
          state={props.state.dialogsPage}
          addMessage={props.addMessage}
          updateNewMessageText={props.updateNewMessageText} />} />

          <Route path='/profile' render={() => <Profile 
          profilePage={props.state.profilePage} 
          addPost={props.addPost} 
          updateNewPostText={props.updateNewPostText} />} />

          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />

        </div>
      </div>
    </BrowserRouter>

  );
}
export default App;
