import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("heading in document", () => {
    render(<App />)
    const header = screen.getByText(/home/i)
    expect(header).toBeInTheDocument()
})

describe("showResults render true and false", () => {
    it("renders results component", () => {
        const handleFetch = jest.fn()
        render(<App handleFetch={handleFetch}/>)
        let button = screen.getByRole("button")
        fireEvent.click(button)
        let result = screen.getByText("result")
        expect(result).toBeInTheDocument()
    })

})