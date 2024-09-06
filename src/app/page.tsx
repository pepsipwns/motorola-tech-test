import Container from "@/components/Container/Container";
import LoginRedirect from "@/components/LoginRedirect/LoginRedirect";
import Navigation from "@/components/Navigation/Navigation";

export default function Home() {
    return (
        <LoginRedirect>
            <div className="flex w-full flex-col items-center gap-y-8">
                <Navigation />
                <main>
                    <Container size="lg">
                        <h1 className="text-center text-3xl font-bold">
                            Welcome to the Motorola Technical Test
                        </h1>
                    </Container>
                </main>
            </div>
        </LoginRedirect>
    );
}
