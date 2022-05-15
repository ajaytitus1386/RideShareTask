import Head from "next/head";
import React from "react";
import { User } from "../models/user";
import NavBar from "./NavBar";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children, user }: { children: any; user: User }) => {
  return (
    <div>
      <Head>
        <title>Edvora Task</title>
        <base target="_blank"></base>
      </Head>
      <NavBar user={user}></NavBar>
      <div>{children}</div>
      <ScrollToTop />
    </div>
  );
};

export default Layout;
