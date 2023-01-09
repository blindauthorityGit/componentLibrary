import React, { useState } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";

const TopLine1 = (props) => {
    return (
        <nav className={`w-full bg-red-500 h-12 grid grid-cols-12  ${props.colspan}`}>
            <div className="col-span-4">Test</div>
        </nav>
    );
};

export default TopLine1;
