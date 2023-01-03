import Footer from "../footer/footer";
import Header from "../header/header";
const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div className="body">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
