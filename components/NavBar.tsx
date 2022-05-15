import React from "react";
import { User } from "../models/user";

const NavBar = ({ user }: { user: User }) => {
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between w-full px-10 py-4 h-18 md:h-24 bg-jetBlack">
      <h1 className="text-3xl font-extrabold text-primary font-raleway">
        Edvora
      </h1>
      <div className="flex flex-row items-center space-x-4">
        <h2 className="text-2xl font-extrabold text-primary font-raleway">
          {user.name}
        </h2>
        <div className="w-16 overflow-hidden rounded-full">
          <img src={"/assets/profile_picture.jpg"}></img>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
