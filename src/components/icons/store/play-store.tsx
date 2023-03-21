import clsx from "clsx";
interface Props {
	className?: string;
}
const GooglePlayStore = (props: Props) => {
	const {className} = props;
	return (
		<a
			href="https://play.google.com/store/apps/details?id=com.wolt.android&pid=google&c=DEU_Web_FTU_Search_Brand_Berlin_EN&af_adset=wolt&af_keywords=wolt&af_sub1=https://www.google.com/&af_sub2=/en/deu/berlin"
			target="_blank"
			rel="noreferrer"
			className="inline-block rounded-2"
			data-testid="google-play-store-icon">
			<img
				aria-label="Download the Wolt Android app on Google Play"
				src="https://consumer-static-assets.wolt.com/app-store-badges/google-play-badge_en.png"
				className={clsx("inline-block max-w-full align-middle", className)}></img>
		</a>
	);
};
export default GooglePlayStore;
