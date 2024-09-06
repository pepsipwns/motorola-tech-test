import Container from "@/components/Container/Container";
import LoginRedirect from "@/components/LoginRedirect/LoginRedirect";
import Navigation from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <LoginRedirect>
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
    </LoginRedirect>
  );
}
