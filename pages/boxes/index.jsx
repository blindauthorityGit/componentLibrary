import React, { useEffect } from "react";
import MainContainer from "../../components/layout/mainContainer";
import { ChoiceDesktop } from "../../components/boxes/twoChoice";

import HeroBG from "../../components/imgs/hero.jpg";

const Boxes = () => {
    useEffect(() => {
        console.log(HeroBG.src);
    });

    return <ChoiceDesktop imageL={HeroBG.src} imageR={HeroBG.src} linkLeft="/" linkRight="/"></ChoiceDesktop>;
};

export default Boxes;
