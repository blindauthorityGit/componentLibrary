import React, { useEffect } from "react";
import MainContainer from "../../components/layout/mainContainer";
import { HeroSlider1 } from "../../components/HeroSlider";
import { EventSlider1 } from "../../components/elementSliders";

const Sliders = () => {
    useEffect(() => {});

    return (
        <>
            <HeroSlider1></HeroSlider1>
            <EventSlider1></EventSlider1>
        </>
    );
};

export default Sliders;
