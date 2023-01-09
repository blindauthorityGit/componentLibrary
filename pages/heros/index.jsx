import React, { useEffect } from "react";
import MainContainer from "../../components/layout/mainContainer";
import Hero1 from "../../components/Hero/hero";

import HeroBG from "../../components/imgs/hero.jpg";

const Heros = () => {
    useEffect(() => {
        console.log(HeroBG.src);
    });

    return (
        <MainContainer width="max-w-[100%] h-screen">
            <Hero1 colspan="col-span-12" bgImage={HeroBG.src}></Hero1>
        </MainContainer>
    );
};

export default Heros;
