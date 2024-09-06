import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-primary-500 flex justify-center items-center text-white px-4 py-2 w-full">
      <Container
        size="lg"
        className="flex w-full gap-2 justify-between items-center"
      >
        <Link href="/">
          <Image src="/icon.png" alt="Anthony's Logo" width={48} height={48} />
        </Link>
        <div className="flex gap-2">
          <Button variant="primary" href="/login">
            Login
          </Button>
          <Button variant="secondary" href="/">
            Sign Up
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
