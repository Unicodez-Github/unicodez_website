import Layout from "../components/layout";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.scss";
import { useEffect } from "react";
import './globalStyle.css'
const progress = new ProgressBar({
  size: 4,
  color: "#02273D",
  className: "z-50",
  delay: 100,
});


Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
