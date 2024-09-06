"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import Button from "../Button/Button";
import Container from "../Container/Container";

import { useAuth } from "@/context/AuthContext";

const Navigation: FC = () => {
    const { isAuthenticated, logout } = useAuth();
    return (
        <nav className="flex w-full items-center justify-center bg-primary-500 px-4 py-2 text-white">
            <Container
                size="lg"
                className="flex w-full items-center justify-between gap-2"
            >
                <Link href="/">
                    <Image
                        src="/icon.png"
                        alt="Anthony's Logo"
                        width={48}
                        height={48}
                    />
                </Link>
                <div className="flex gap-2">
                    {isAuthenticated ? (
                        <Button variant="primary" onClick={logout}>
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Button variant="primary" href="/login">
                                Login
                            </Button>
                            <Button variant="secondary" href="/">
                                Sign Up
                            </Button>
                        </>
                    )}
                </div>
            </Container>
        </nav>
    );
};

export default Navigation;
