import Head from "next/head";
import AboutHeader from "../components/AboutHeader";
import AboutBody from "../components/AboutBody";
import AboutCards from "../components/AboutCards";

export default function About() {
  return (
    <>
        <Head>
          <title>About Page</title>
          <meta name="description" content="Handles "/>
        </Head>
        <div className="container-fluid p-0">
          <AboutHeader/>
          <AboutBody/>
          <AboutCards/>
        </div>
    </>
  );
}