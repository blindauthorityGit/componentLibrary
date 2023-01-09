import React, { useEffect } from "react";
import MainContainer from "../../components/layout/mainContainer";
import { ImageGrid1 } from "../../components/imageGrids";
const Heros = () => {
    useEffect(() => {});

    return (
        <MainContainer width="container m-auto">
            <div className="col-span-12">
                <ImageGrid1></ImageGrid1>
            </div>
        </MainContainer>
    );
};

export default Heros;
