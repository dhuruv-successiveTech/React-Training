import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalComponent from "./Modal";

describe("ModalComponent", () => {
  beforeEach(() => {
    render(<ModalComponent />);
  });

  it("renders open modal button", () => {
    expect(screen.getByRole("button", { name: /open modal/i })).toBeInTheDocument();
  });

  it("opens the modal when 'Open Modal' button is clicked", async () => {
    await userEvent.click(screen.getByRole("button", { name: /open modal/i }));
    expect(screen.getByText(/Modal Content/i)).toBeInTheDocument();
    expect(screen.getByText(/This is some content inside the modal/i)).toBeInTheDocument();
  });

  it("closes the modal when 'Close' button is clicked", async () => {
    await userEvent.click(screen.getByRole("button", { name: /open modal/i }));
    expect(screen.getByText(/Modal Content/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(screen.queryByText(/Modal Content/i)).not.toBeInTheDocument();
  });
});
