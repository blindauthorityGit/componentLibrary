import React from "react";
import Link from "next/link";

const Box = (props) => {
    return (
        <Link href={props.href}>
            <a className="h-48 col-span-6 text-white font-sans text-2xl bg-black flex items-center justify-center">
                {props.children}
            </a>
        </Link>
    );
};

export default Box;
