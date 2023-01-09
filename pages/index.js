import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Box from "../components/layout/box";
import Hero from "../components/Hero/hero";
import { useNextSanityImage } from "next-sanity-image";

export default function Home() {
    return (
        <MainContainer width="max-w-[80%]">
            <Head>
                <title>Site title</title>
            </Head>

            <Box href="./heros">Heros</Box>
            <Box href="./menus">Menus</Box>
            <Box href="./boxes">Boxes</Box>
            <Box href="./sliders">Slider</Box>
            <Box href="./textImgs">Text Image Boxes</Box>
            <Box href="./grids">Grids</Box>
            <Box href="./stoerer">Stoerer</Box>
        </MainContainer>
    );
}
