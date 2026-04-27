import React from 'react';

const LayoutComponent = (props: { children?: React.ReactNode }) => {
	return (
		<div className="flex justify-center p-4">
			<div className="w-[90%]">{props.children}</div>
		</div>
	);
};

export default LayoutComponent;
