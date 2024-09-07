import { render, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";

import Home from "../app/page";
import { AuthProvider } from "../context/AuthContext";

// Mocking useRouter
jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

describe("Home Page", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should redirect to login page when not authorized", async () => {
        const mockPush = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
        render(
            <AuthProvider>
                <Home />
            </AuthProvider>,
        );

        await waitFor(() => {
            expect(mockPush).toHaveBeenCalledWith("/login");
        });
    });
});
