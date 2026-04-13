'use-client';

import gdpVideo from '@/public/videos/gdpVideo.mp4';
import TextComponent from '../project/layout_components/TextComponent';
import VideoComponent from '../project/layout_components/VideoComponent';

const TeslaTurbineLayout = () => {
	const summary =
		'This project features the design of a 100W, 8kg Tesla Turbine for pico-hydro applications, made to address the challenge of rural electrification by providing clean, reliable power to rural communities.';
	return (
		<>
			<TextComponent text={summary} />
			<VideoComponent path={gdpVideo} />
		</>
	);
};

export default TeslaTurbineLayout;
