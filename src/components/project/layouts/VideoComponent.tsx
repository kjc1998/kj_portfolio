import LayoutComponent from './LayoutComponent';

const VideoComponent = (props: { path: string }) => {
	return (
		<LayoutComponent>
			<div className="flex justify-center">
				<video className="w-[90%]" controls preload="metadata">
					<source src={props.path} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		</LayoutComponent>
	);
};

export default VideoComponent;
