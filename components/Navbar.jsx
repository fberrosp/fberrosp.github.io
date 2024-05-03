import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { styles } from "@/styles/styles";
import { BsSunFill, BsMoonFill, BsX, BsList } from "react-icons/bs";
import { useRouter } from "next/router";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#f5f5f5");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mode, setMode] = useThemeSwitcher();

  useEffect(() => {
    if (
      router.asPath === "/formula1App" ||
      router.asPath === "/projectManagementApp" ||
      router.asPath === "/applicationBot" ||
      router.asPath === "/chatBot"
    ) {
      setNavBg("transparent");
      setLinkColor("#ffffff");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (scrollPosition >= 90) {
        setShadow(true);
        if (mode != "dark") {
          setNavBg("#f5f5f5");
          setLinkColor("#1f2937");
        } else {
          setNavBg("#1b1b1b");
          setLinkColor("#ffffff");
        }
      } else {
        setShadow(false);
        setNavBg("transparent");
        setLinkColor("#ffffff");
      }
    };

    handleShadow();
  }, [scrollPosition, mode]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setNavBg(mode != "dark" ? "#f5f5f5" : "#1b1b1b");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mode]);

  return (
    <nav
      style={{
        backgroundColor: navBg,
        opacity: navBg === "transparent" ? 0.9 : 1,
      }}
      className={`${styles.padding} w-full flex items-center fixed top-0 z-20 ${
        shadow ? "shadow-lg shadow-gray-400" : ""
      } transition-all duration-500`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/assets/newWhiteLogo.png"
            alt="/"
            width="32"
            height="51"
          />
        </Link>

        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex font-bold"
          >
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b"> Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#experience">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Experience
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMode(mode === "light" ? "dark" : "light");
              }}
              className="flex items-center justify-center rounded-full"
            >
              <li className="ml-10 text-sm uppercase hover:border-b"></li>
              {mode === "dark" ? (
                <BsSunFill style={{ fontSize: "18px" }} />
              ) : (
                <BsMoonFill style={{ fontSize: "18px" }} />
              )}
            </Link>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <BsList size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black bg-opacity-70"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[50%] sm:w-[60%] md:w-[45%] h-screen bg-white dark:bg-dark p-10 ease-in duration-500"
              : "fixed right-[-150%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/assets/newWhiteLogo.png"
                  alt="/"
                  width="32"
                  height="51"
                />
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <BsX />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <h3 className="w-[85%] md:w-[90%] py-4">Fernando Berrospi</h3>
            </div>
          </div>
          <div className="py-4 flex flex-col text-right items-end">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMode(mode === "light" ? "dark" : "light");
                }}
                className=""
              >
                <li className="py-4 text-sm flex items-end justify-end">
                  {mode === "dark" ? (
                    <BsSunFill
                      style={{ fontSize: "18px" }}
                      className="items-center justify-center"
                    />
                  ) : (
                    <BsMoonFill
                      style={{ fontSize: "18px" }}
                      className="items-center justify-center"
                    />
                  )}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
