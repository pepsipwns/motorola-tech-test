import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";

import Login from "../app/login/page";
import { AuthProvider } from "../context/AuthContext";

// Mocking useRouter
jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

describe("Login Page", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render the login form", () => {
        render(
            <AuthProvider>
                <Login />
            </AuthProvider>,
        );

        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    it("should redirect to home on successful login", async () => {
        const mockPush = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
        render(
            <AuthProvider>
                <Login />
            </AuthProvider>,
        );

        fireEvent.change(screen.getByLabelText(/username/i), {
            target: { value: "user" },
        });
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: "pass" },
        });
        fireEvent.click(screen.getByTestId("login-button"));

        await waitFor(() => {
            expect(mockPush).toHaveBeenCalledWith("/");
        });
    });

    it("should display an error on invalid credentials", async () => {
        render(
            <AuthProvider>
                <Login />
            </AuthProvider>,
        );

        fireEvent.change(screen.getByLabelText(/username/i), {
            target: { value: "wronguser" },
        });
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: "wrongpass" },
        });
        fireEvent.click(screen.getByTestId("login-button"));

        await waitFor(() => {
            expect(
                screen.getByText(/Invalid username or password/i),
            ).toBeInTheDocument();
        });
    });
});
