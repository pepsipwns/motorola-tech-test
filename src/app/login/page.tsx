"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "@/components/Input/Input";
import { useAuth } from "@/context/AuthContext";
import Navigation from "@/components/Navigation/Navigation";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import { FC, useEffect } from "react";

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
    <div className="flex flex-col w-full gap-y-8 items-center">
      <Navigation />
      <Container size="lg">
        <form
          className="p-6 bg-white rounded-lg shadow-md border"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl mb-4">Login</h2>

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
          {error && <p className="text-red-500 text-sm my-2">{error}</p>}

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
