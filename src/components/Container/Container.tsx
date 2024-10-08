import { cva } from "class-variance-authority";
import React, { FC, ReactNode } from "react";

import { classMerge } from "@/helpers/functions";

const containerSizes = cva(["px-4 lg:px-0 "], {
    variants: {
        size: {
            sm: "max-w-2xl",
            md: "max-w-5xl",
            lg: "max-w-7xl",
        },
    },
});

interface ContainerProps {
    size?: "sm" | "md" | "lg";
    className?: string;
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({
    size = "md",
    className = "",
    children,
}) => {
    return (
        <div className={classMerge(containerSizes({ size }), className)}>
            {children}
        </div>
    );
};

export default Container;
