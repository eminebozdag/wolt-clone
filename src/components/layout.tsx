import Footer from "./footer/footer";
import Header from "./header/header";
interface Props {
	children?: any;
}
const Layout = (props: Props) => {
	const {children} = props;
	return (
		<div data-testid="layout-component">
			<Header />
			<div data-testid="layout-children">{children}</div>
			<Footer />
		</div>
	);
};
export type {Props};
export default Layout;
