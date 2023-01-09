import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import { Menu1 } from "../components/menues";
import { menuItems, socialMedia } from "../components/menues/config";
import Logo from "../assets/logo.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import { HeroSlider1 } from "../components/HeroSlider";
import { TopLine1 } from "../components/topLine";
import { EventSlider1 } from "../components/elementSliders";
import { ImgText1, ImgText2 } from "../components/imgText";
import { Stoerer1 } from "../components/stoerer";
import { Footer1 } from "../components/footer";

import Hero from "../components/Hero/hero";
import { useNextSanityImage } from "next-sanity-image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Site title</title>
            </Head>
            <TopLine1></TopLine1>
            <Menu1
                logo={Logo.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
                onBurgerClick={(e) => {
                    console.log(e);
                }}
            ></Menu1>
            <HeroSlider1></HeroSlider1>
            <div className="divider h-24"></div>
            <EventSlider1></EventSlider1>
            <div className="divider h-24"></div>
            <ImgText1></ImgText1>
            <div className="divider h-24"></div>
            <ImgText2 order="order-last"></ImgText2>
            <div className="divider h-24"></div>
            <ImgText1></ImgText1>
            <div className="divider h-24"></div>
            <Stoerer1></Stoerer1>
            <div className="divider h-24"></div>
            <Footer1></Footer1>
        </>
    );
}
