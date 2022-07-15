import React from 'react';
import img from './image/banner_error_404.jpg'; 

const NotFound = () => {
	return (
		<div>
			<img src={img} alt=" " />
			{/* <h1>The Page Not Found</h1> */}
		</div>
	);
};

export default NotFound;