import { FaFacebook, FaInstagram } from "react-icons/fa";

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

export { menuItems, socialMedia };
