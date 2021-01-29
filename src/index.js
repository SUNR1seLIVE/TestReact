import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{id: 1, message: 'Привет, как ты?', likesCount: 12},
	{id: 2, message: 'Это мой первый пост', likesCount: 11}
];
let dialogs = [
	{ id: 1, name: 'Дима' },
	{ id: 2, name: 'Андрей' },
	{ id: 3, name: 'Света' },
	{ id: 4, name: 'Саша' },
	{ id: 5, name: 'Виктор' },
	{ id: 6, name: 'Валя' }
];
let messages = [
	{ id: 1, message: 'Привет1' },
	{ id: 2, message: 'Привет2' },
	{ id: 3, message: 'Привет3' },
	{ id: 4, message: 'Привет4' },
	{ id: 5, message: 'Привет5' },
	{ id: 6, message: 'Привет6' },
	{ id: 7, message: 'Привет7' }
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();