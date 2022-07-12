import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div className='header'>
		<Link to="/home">Home</Link>
		<Link to="/register">Register</Link>
		<Link to="/login">Login</Link>
		<Link to="/services">Services</Link>
		<Link to="/eyespecialist">EyeSpecialist</Link>
		<Link to="/medicinespecialist">MedicineSpecialist</Link>

		
		


		</div>
	);
};

export default Header;