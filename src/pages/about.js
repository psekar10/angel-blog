import React from 'react';
import styled from 'styled-components';

import img1 from "../img/img1.jpg";

const Container = styled.div`
	// display: grid;
	// grid-template-columns: repeat(2, minmax(250px, 1fr));
	// gap: 20px;
	// @media (max-width: 720px) {
	// 	grid-template-columns: repeat(1, minmax(250px, 1fr));
	// }
`;
const Para = styled.p`
clear:both;
`;

const Image = styled.img`
	object-fit: cover;
	width: 100%;
	height: 400px;
`;
const About = () => {
	const handleClick = () => {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = "this worked and is awesome";
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
	}
	return (
		<Container>
			<Image src={img1} />
			<h2>ABOUT ME </h2>
			<Para>
				Contrary to popular belief, Lorem Ipsum is not simply random text. 
				It has roots in a piece of classical Latin literature from 45 BC, 
				making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
				in Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
				discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
				"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				This book is a treatise on the theory of ethics, very popular during the Renaissance. 
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
				section 1.10.32.
				Contrary to popular belief, Lorem Ipsum is not simply random text. 
				It has roots in a piece of classical Latin literature from 45 BC, 
				making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
				in Virginia, looked up one of the more obscure Latin words, consectetur,
				from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
				discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 

			</Para>
		</Container>
	);
}

export default About;