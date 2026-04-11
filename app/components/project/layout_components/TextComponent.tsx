const TextComponent = (prop: { text: string }) => {
	return (
		<div className="flex justify-center">
			<div className="w-[90%]">
				<p className="text-justify">{prop.text}</p>
			</div>
		</div>
	);
};

export default TextComponent;
