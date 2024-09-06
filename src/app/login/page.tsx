"use client";

import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Input from "@/components/Input/Input";
import Navigation from "@/components/Navigation/Navigation";

import { useAuth } from "@/context/AuthContext";

interface LoginFormInputs {
    username: string;
    password: string;
}

const Login: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>();
    const { login, isAuthenticated, error } = useAuth();
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
        login(data.username, data.password);
    };

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/");
        }
    }, [isAuthenticated, router]);

    return (
        <div className="flex w-full flex-col items-center gap-y-8">
            <Navigation />
            <Container size="lg">
                <form
                    className="rounded-lg border bg-white p-6 shadow-md"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h2 className="mb-4 text-2xl">Login</h2>

                    <Input
                        label="Username"
                        type="text"
                        name="username"
                        register={register}
                        validation={{ required: "Username is required" }}
                        error={errors.username}
                    />

                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        register={register}
                        validation={{ required: "Password is required" }}
                        error={errors.password}
                    />
                    {error && (
                        <p className="my-2 text-sm text-red-500">{error}</p>
                    )}

                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default Login;
