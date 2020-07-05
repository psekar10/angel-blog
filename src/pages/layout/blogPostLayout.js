import React from 'react';
import { useLocation } from "react-router-dom";

import WrappedAround from './wrappedAround';
import SideBySide from './sideBySide';

const BlogPostLayout = ({layout, linkto, ...rest}) => {
	const location = useLocation();
	const nextPath = {pathname: linkto, state: { prevPath: location.pathname }};
	
	switch (layout) {
		case "WrappedAround":
			return <WrappedAround linkto={nextPath} {...rest} />
		case "SideBySide":
			return <SideBySide linkto={nextPath} {...rest} />
		default:
			console.log('Error');
			return null;
	}
}

export default BlogPostLayout;