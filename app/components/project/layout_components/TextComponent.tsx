const TextComponent = (prop: { text: string }) => {
	return (
		<div className="flex justify-center p-4">
			<div className="w-[90%]">
				<p className="text-justify">{prop.text}</p>
			</div>
		</div>
	);
};

export default TextComponent;
