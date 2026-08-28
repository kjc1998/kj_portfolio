import React from 'react';
import LayoutComponent from './LayoutComponent';

const TextComponent = (prop: { content: React.ReactNode }) => {
	return (
		<LayoutComponent>
			<p className="text-justify">{prop.content}</p>
		</LayoutComponent>
	);
};

export default TextComponent;
