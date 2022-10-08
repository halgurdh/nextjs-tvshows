import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  return (
    <nav>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-y-hidden overflow-x-scroll py-5">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
