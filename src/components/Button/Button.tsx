"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

import { classMerge } from "@/helpers/functions";

const buttonStyles = cva(
    ["px-6 py-2 rounded-lg text-md font-medium shadow-lg"],
    {
        variants: {
            size: {
                sm: "max-w-xl",
                md: "max-w-2xl",
                lg: "max-w-3xl",
            },
            variant: {
                primary:
                    "bg-primary-700 hover:bg-primary-800 hover:text-white text-secondary-200",
                secondary:
                    "bg-secondary-700 hover:bg-secondary-800 hover:text-white text-secondary-200",
                text: "bg-transparent text-primary-600",
            },
        },
    },
);

interface ButtonProps {
    id?: string;
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "text";
    onClick?: () => void | null;
    href?: string | null;
    type?: "button" | "submit" | "reset";
    className?: string;
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({
    id,
    size = "md",
    variant = "primary",
    onClick = () => {},
    href = null,
    type = "button",
    className = "",
    children,
}) => {
    if (href) {
        return (
            <Link
                id={id}
                data-testid={id}
                href={href}
                className={classMerge(
                    buttonStyles({ size, variant }),
                    className,
                )}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            id={id}
            data-testid={id}
            type={type}
            onClick={onClick}
            className={classMerge(buttonStyles({ size, variant }), className)}
        >
            {children}
        </button>
    );
};

export default Button;
