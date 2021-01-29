import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Setting from './components/Setting/Setting';


const App = (props) => {
  return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div class='app-wrapper-content'>
					<Route path='/dialogs' component={Dialogs} />
					<Route path='/profile' component={Profile} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/setting' component={Setting} />
				</div>
			</div>
		</BrowserRouter>
  )
}

export default App;