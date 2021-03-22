import React, { useState, useEffect } from 'react';
// import './styles.css';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import SignUp from '../components/SignupForm';
import Header from '../components/header';
import { Features } from '../components/features';
import { About } from '../components/about';
import { Contact } from '../components/contact';
import JsonData from '../data/data.json';


const Routes = () => {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);
	return (
		<div>
			<Switch>
				<Route path='/Contact'>
					<Contact data={landingPageData.Contact} />
				</Route>
				<Route exact path='/'>
					<Header data={landingPageData.Header} />
				</Route>
				<Route path='/Features'>
					<Features data={landingPageData.Features} />
				</Route>
				<Route path='/About'>
					<About data={landingPageData.About} />
				</Route>
				<Route path='/signin'>
					<Login />
				</Route>
				<Route path='/signup'>
					<SignUp />
				</Route>
			</Switch>
		</div>
	);
};

export default Routes;
