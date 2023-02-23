import Footer from "./footer/footer";
import Header from "./header/header";
const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div id="body">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
