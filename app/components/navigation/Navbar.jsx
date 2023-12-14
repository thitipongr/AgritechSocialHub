"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import ProfileImg from "../ProfileImg";

const Navbar = () => {
  const [navbarMoreMenuState, setNavbarMoreMenuState] = useState(false);
  const [navbarProfileMenuState, setNavbarProfileMenuState] = useState(false);

  const navbarMoreMenu = () => {
    navbarMoreMenuState
      ? setNavbarMoreMenuState(false)
      : setNavbarMoreMenuState(true);
  };

  const navbarProfileMenu = () => {
    navbarProfileMenuState
      ? setNavbarProfileMenuState(false)
      : setNavbarProfileMenuState(true);
  };

  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-row h-16 items-center p-4 bg-emerald-800 justify-between sm:justify-start sticky">
        <button
          onClick={navbarMoreMenu}
          className="flex sm:hidden text-neutral-50"
        >
          {!navbarMoreMenuState ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        <div
          className={clsx(
            {
              "flex flex-col": navbarMoreMenuState,
              hidden: !navbarMoreMenuState,
            },
            "absolute top-16 left-0 bg-emerald-800 p-2 rounded-br-3xl"
          )}
        >
          <NavLink />
        </div>

        <div className="sm:container sm:mx-auto flex flex-row justify-between">
          <Link href={"/"}>
            <div className="flex flex-row items-center text-4xl tracking-tight text-neutral-50 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                />
              </svg>
              <div className="hidden sm:flex flex-row">AgritShub</div>
            </div>
          </Link>
          <div className="flex flex-row items-center">
            <div className="hidden sm:flex flex-row">
              <NavLink />
            </div>
            <button
              onClick={navbarProfileMenu}
              className="hidden sm:flex relative ml-4"
            >
              <ProfileImg />
              <div
                className={clsx(
                  {
                    "flex flex-col": navbarProfileMenuState,
                    hidden: !navbarProfileMenuState,
                  },
                  "absolute top-12 -right-9 bg-emerald-800 p-2 rounded-bl-3xl rounded-br-3xl"
                )}
              >
                <Link
                  href={"/profile"}
                  className={clsx("px-4 py-2 text-xl text-slate-50", {
                    "bg-emerald-900 rounded-full": pathname === "/profile",
                  })}
                >
                  <p>Profile</p>
                </Link>
                <Link
                  href={"/"}
                  className={clsx("px-4 py-2 text-xl text-slate-50")}
                >
                  <p>Logout</p>
                </Link>
              </div>
            </button>
          </div>
        </div>

        <button
          onClick={navbarProfileMenu}
          className="flex flex-row items-center sm:hidden"
        >
          <ProfileImg />
          <div
            className={clsx(
              {
                "flex flex-col": navbarProfileMenuState,
                hidden: !navbarProfileMenuState,
              },
              "absolute top-16 right-0 bg-emerald-800 p-2 rounded-bl-3xl"
            )}
          >
            <Link
              href={"/profile"}
              className={clsx("px-4 py-2 text-xl text-slate-50", {
                "bg-emerald-900 rounded-full": pathname === "/profile",
              })}
            >
              <p>Profile</p>
            </Link>
            <Link
              href={"/"}
              className={clsx("px-4 py-2 text-xl text-slate-50")}
            >
              <p>Logout</p>
            </Link>
          </div>
        </button>
      </div>
    </>
  );
};

export default Navbar;
