import LayoutComponent from './LayoutComponent';

const TextComponent = (prop: { text: string }) => {
	return (
		<LayoutComponent>
			<p className="text-justify">{prop.text}</p>
		</LayoutComponent>
	);
};

export default TextComponent;
