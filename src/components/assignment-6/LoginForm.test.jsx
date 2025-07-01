import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("LoginForm component", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it("renders username, password fields and login button", () => {
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("allows user to type in username and password fields", async () => {
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await userEvent.type(usernameInput, "testuser");
    await userEvent.type(passwordInput, "testpass");

    expect(usernameInput).toHaveValue("testuser");
    expect(passwordInput).toHaveValue("testpass");
  });

  it("logs correct message on form submission", async () => {
    const consoleLogMock = jest.spyOn(console, "log").mockImplementation(() => {});

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    await userEvent.type(usernameInput, "admin");
    await userEvent.type(passwordInput, "admin123");
    await userEvent.click(loginButton);

    expect(consoleLogMock).toHaveBeenCalledWith("admin logged in successfully");

    consoleLogMock.mockRestore();
  });
});
