import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Route path='/dialogs' render={ () => <DialogsContainer /> } />
				<Route path='/profile' render={ () => <Profile /> } />
				<Route path='/news' render={ () => <News /> } />
				<Route path='/music' render={ () => <Music /> } />
				<Route path='/setting' render={ () => <Setting /> } />
				<Route path='/users' render={ () => <UsersContainer /> } />
			</div>
		</div>
  )
}

export default App;