import { Fragment } from "react";
import Footer from "./sections/footer";

const Layout = ({ children }) => {
    return (
        <Fragment>
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout;