import type { NextPage } from "next";
import Router from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/") {
      Router.push("rides/nearest");
    }
  }, []);

  return <div> Redirecting...</div>;
};

export default Home;
