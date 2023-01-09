import React, { useEffect } from "react";
import MainContainer from "../../components/layout/mainContainer";
import { Menu1, Menu2 } from "../../components/menues";
import Logo from "../../assets/logo.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Menus = () => {
    useEffect(() => {});

    const menuItems = [
        {
            title: "Link 1",
            slug: "link1",
            subMenu: true,
            subMenuItems: [
                {
                    title: "Über uns",
                    slug: "ueberuns",
                },
                {
                    title: "Sammlung",
                    slug: "sammlung",
                },
                {
                    title: "Leitbild",
                    slug: "leitbild",
                },
                {
                    title: "360° Besuch",
                    slug: "360besuch",
                },
            ],
        },
        {
            title: "Link 2",
            slug: "link2",
            subMenu: false,
        },
        {
            title: "Link 3",
            slug: "link3",
            subMenu: false,
        },
    ];
    const socialMedia = [
        {
            title: "Facebook",
            link: "http://www.facebook.com",
            icon: <FaFacebook></FaFacebook>,
        },
        {
            title: "Inbstagram",
            link: "http://www.instagram.com",
            icon: <FaInstagram></FaInstagram>,
        },
    ];

    return (
        <>
            <Menu1
                logo={Logo.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
                onBurgerClick={(e) => {
                    console.log(e);
                }}
            ></Menu1>
            {/* <Menu2
                logo={Logo.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
                onBurgerClick={(e) => {
                    console.log(e);
                }}
            ></Menu2> */}
            <style jsx>{`
                body {
                    background: black;
                }
            `}</style>
        </>
    );
};

export default Menus;
