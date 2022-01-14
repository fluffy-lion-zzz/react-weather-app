import { render, screen } from "@testing-library/react";
import App from "./App";

test("heading in document", () => {
    render(<App />)
    const header = screen.getByText(/weather/i)
    expect(header).toBeInTheDocument()
})