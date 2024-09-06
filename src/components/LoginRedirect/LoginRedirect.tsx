"use client";

import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

import { useAuth } from "@/context/AuthContext";

const LoginRedirect: FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return null; // Return null for now while redirecting - could put a loading spinner here
    }

    return <>{children}</>;
};

export default LoginRedirect;
