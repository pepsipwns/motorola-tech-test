import Container from "@/components/Container/Container";
import Navigation from "@/components/Navigation/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-y-8 items-center">
      <Navigation />
      <main>
        <Container size="lg">
          <h1 className="text-3xl font-bold text-center">
            Welcome to the Motorola Technical Test
          </h1>
        </Container>
      </main>
    </div>
  );
}
