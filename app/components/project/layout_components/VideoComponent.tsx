const VideoComponent = (props: { path: string }) => {
	console.log(props.path);
	return (
		<div className="flex justify-center">
			<video className="w-[80%]" controls preload="metadata">
				<source src={props.path} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default VideoComponent;
