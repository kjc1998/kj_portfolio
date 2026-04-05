const MoreSection = (prop: { activate: [boolean, (value: React.SetStateAction<boolean>) => void] }) => {
	const [isActivate, setIsActivate] = prop.activate;
	return isActivate ? (
		<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80">
			<div className="relative w-11/12 max-w-2xl h-auto max-h-[80vh] bg-gray-900 border border-white/10 p-8 rounded-2xl shadow-2xl overflow-y-auto">
				{/* Close Button */}
				<button onClick={() => setIsActivate(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>

				<h2 className="text-2xl font-bold text-white mb-4">Info</h2>
			</div>
		</div>
	) : (
		<></>
	);
};

export default MoreSection;
