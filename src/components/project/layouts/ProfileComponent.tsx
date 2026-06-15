import Image, { StaticImageData } from 'next/image';

export interface ProfileI {
	name: string;
	pageLink: string;
	image: StaticImageData;
}

const ProfileComponent = (props: ProfileI) => {
	return (
		<a
			href={props.pageLink}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center w-fit gap-3 px-4 py-2 bg-gray-700 rounded-full transition-all duration-200 hover:bg-gray-400 hover:shadow-md active:scale-95"
		>
			<Image src={props.image} width={35} height={35} alt="Contributor" className="rounded-full object-cover" />
			<span className="text-sm whitespace-nowrap">{props.name}</span>
		</a>
	);
};

export default ProfileComponent;
