import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";

const Menu1 = (props) => {
    const navRef = useRef(null);
    const animate = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > navRef.current.offsetTop) {
                navRef.current.classList.add("fixed", "top-0");
            } else {
                navRef.current.classList.remove("fixed");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const onEnter = (e) => {
        console.log(e.target);
    };

    const textMotion = {
        rest: {
            x: -50,
            opacity: 0,

            transition: {
                duration: 0.85,
                type: "tween",
                ease: "easeIn",
            },
        },
        hover: {
            // color: "blue",
            x: 0,
            opacity: 1,

            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeOut",
            },
        },
    };

    const boxMotion = {
        rest: {
            opacity: 0,
            display: "none",
            ease: "easeOut",
            duration: 0.2,
            type: "spring",
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        },
        hover: {
            opacity: 1,
            display: "block",
            transition: {
                duration: 0.4,
                type: "spring",
                ease: "easeIn",
            },
        },
        end: {
            opacity: 0,
            display: "block",
            transition: {
                duration: 0.4,
                type: "spring",
                ease: "easeIn",
            },
        },
    };

    const pfeilMotion = {
        rest: {
            y: -5,
            ease: "easeOut",
            duration: 0.5,
            type: "spring",
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        },
        hover: {
            y: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                ease: "easeIn",
            },
        },
    };

    return (
        <nav ref={navRef} className={`w-full bg-white z-50  ${props.colspan}`}>
            <div className="container grid grid-cols-12 m-auto items-center">
                {/* Background Image */}
                <div className="logo col-span-2 ">
                    <Link href="/">
                        <a>
                            <img src={props.logo} className="max-h-[2.75rem]" alt="Logo" />
                        </a>
                    </Link>
                </div>
                <div className="col-span-8 ">
                    <ul className="hidden sm:flex items-center list-style-none justify-end pr-8">
                        {props.menuItems.map((e, i) => {
                            return (
                                <motion.li
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    key={`menuKey${i}`}
                                    className="relative mx-8 py-4 font-oswald font-bold hover:text-red-500"
                                    onMouseEnter={(e) => {
                                        onEnter(e);
                                    }}
                                >
                                    <Link href={`/${e.slug}`}>
                                        <a className="flex items-end uppercase text-lg">
                                            {e.title}{" "}
                                            {e.subMenu ? (
                                                <motion.span variants={pfeilMotion}>
                                                    <BiChevronDown></BiChevronDown>
                                                </motion.span>
                                            ) : null}
                                        </a>
                                    </Link>
                                    {e.subMenu ? (
                                        <motion.ul
                                            variants={boxMotion}
                                            className={`absolute z-50 mt-4 bg-[#000] text-white pl-16 pr-24 py-4 left-[-4rem] rounded-br-lg rounded-bl-lg ${props.subMenuKlasse}`}
                                        >
                                            {e.subMenuItems.map((e, i) => {
                                                return (
                                                    <motion.li
                                                        variants={textMotion}
                                                        key={`submenuKey${i}`}
                                                        className="min-w-max mb-3"
                                                    >
                                                        <Link href={`/${e.slug}`}>
                                                            <a className="hover:text-red-500 font-semibold">
                                                                {e.title}
                                                            </a>
                                                        </Link>
                                                        <hr className="mt-1" />
                                                    </motion.li>
                                                );
                                            })}
                                        </motion.ul>
                                    ) : null}
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
                <div className="col-span-2 social media flex justify-end">
                    <div className="block sm:hidden cursor-pointer" onClick={props.onBurgerClick}>
                        {props.burgerIcon}
                    </div>
                    <div className="hidden sm:flex ">
                        {props.socialMedia.map((e, i) => {
                            return (
                                <a className="mr-4" key={`smKey${i}`} href={e.link} alt={e.title}>
                                    {e.icon}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .hover-underline-animation {
                    display: inline-block;
                    position: relative;
                    color: #000;
                }

                .hover-underline-animation::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    transform: scaleX(0);
                    height: 1px;
                    bottom: 0;
                    left: 0;
                    background-color: #000;
                    transform-origin: bottom right;
                    transition: transform 0.25s ease-out;
                }

                .hover-underline-animation:hover::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
                }
            `}</style>
        </nav>
    );
};

export default Menu1;
