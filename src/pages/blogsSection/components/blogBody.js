import React from 'react';

import Post1 from '../post1';
import Post2 from '../post2';
import Post3 from '../post3';
import Post4 from '../post4';
import Post5 from '../post5';
import Post6 from '../post6';

const BodyComponent = ({slug}) => {
	switch(slug) {
		case "post1":
			return <Post1 />
		case "post2":
			return <Post2 />
		case "post3":
			return <Post3 />
		case "post4":
			return <Post4 />
		case "post5":
			return <Post5 />
		case "post6":
			return <Post6 />
		default:
			return <p>DEFAULT TEXT</p>;
	}
}

export default BodyComponent;