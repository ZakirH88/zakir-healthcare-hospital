import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div>
			<h2>Please Login</h2>
			<Button>Google Sign In</Button>
			<br/>
			<Link to="/register">New User?</Link>
		</div>
	);
};

export default Login;