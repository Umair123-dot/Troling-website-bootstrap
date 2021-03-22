import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../Register/login';
import SignUp from '../Register/SignUp';

const index = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route path='/sign-in' component={Login} />
				<Route path='/sign-up' component={SignUp} />
			</Switch>
		</div>
	);
};

export default index;
